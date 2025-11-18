// import TelegramBot from "node-telegram-bot-api";
const TelegramBot = require("node-telegram-bot-api");
const { config } = require("dotenv");
config();

const TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

let usersData = [
  { chatId: 7720590409, firstName: "𝓪𝓶𝓪𝓷𝓰𝓪𝓵𝓭𝓲𝓮𝓿", admin: true },
  { chatId: 6480933576, firstName: "•𝓘𝓼𝓵𝓸𝓶𝓫𝓮𝓴•", admin: true },
  { chatId: 7382570505, firstName: "عبدشاريبوف", admin: true },
  { chatId: 2143181285, firstName: "Назирбоев", admin: true },
  { chatId: 7869204457, firstName: "Sunnatbek", admin: true },
  { chatId: 1904019441, firstName: "Bakhtiyarov", admin: true },
  { chatId: 6052548847, firstName: "Alisher🫀", admin: true },
  { chatId: 7174492240, firstName: "_jasurbekvnaa.__", admin: true },
  { chatId: 875072364, firstName: "Abbosbek", admin: true },
];

bot.on("message", (msg) => {
  // console.log(msg);
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstName = msg.chat.first_name;

  //   bot.sendMessage(chatId, text);

  if (text == "/start" || text == "Asosiy menyuga qaytish") {
    bot.sendMessage(
      chatId,
      `
    👋 Assalomu alaykum, ${firstName}!

📚 100x o‘quv markazining rasmiy botiga xush kelibsiz!

Bu bot orqali siz:
• Kurslarimiz haqida batafsil ma’lumot olasiz  
• Kurslarga onlayn ro‘yxatdan o‘tishingiz mumkin  
• Jadval va to‘lovlar haqida ma’lumot olasiz  

Quyidagi menyudan kerakli bo‘limni tanlang 👇

    `,
      {
        reply_markup: {
          keyboard: [
            [{ text: "📚 Kurslar" }, { text: "✍️ Ro‘yxatdan o‘tish" }],
            [{ text: "ℹ️ Markaz haqida" }, { text: "💬 Fikr bildirish" }],
            [{ text: "❓ Yordam" }],
          ],
          resize_keyboard: true,
        },
      }
    );
  } else if (text == "📚 Kurslar") {
    bot.sendMessage(
      chatId,
      `🎓 Bizning o‘quv markazimizda quyidagi kurslar mavjud:

1️⃣ Ingliz tili  
2️⃣ Rus tili  
3️⃣ Matematika  
4️⃣ Dasturlash (Python, Web)  
5️⃣ Grafik dizayn  

👇 Quyidagi kurslardan birini tanlang va batafsil ma’lumot oling:
      `,
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "🇬🇧 Ingliz tili", callback_data: "course_english" }],
            [{ text: "🇬🇧 Ingliz tili", callback_data: "course_english" }],
            [{ text: "🇬🇧 Ingliz tili", callback_data: "course_english" }],
          ],
        },
      }
    );
  } else if (text == "ℹ️ Markaz haqida") {
    bot.sendMessage(chatId, "📍 Bizning o‘quv markaz joylashuvi:");
    bot.sendLocation(chatId, 41.3781989, 60.3694056);
  } else if (text == "✍️ Ro‘yxatdan o‘tish") {
    const userExists = usersData.some((user) => user.chatId === chatId);

    console.log("bormi: ", userExists);

    if (!userExists) {
      usersData = [
        ...usersData,
        {
          chatId: chatId,
          firstName: firstName,
          admin: false,
        },
      ];
    }

    usersData.forEach((user) => {
      if (user.admin) {
        bot.sendMessage(
          user.chatId,
          `Yangi xabar ✅\n\n--user: ${firstName}\n--chatId: ${chatId}\n\n*******`
        );
      }
    });

    bot.sendMessage(chatId, `Tabriklaymiz, siz ro'yhatdan o'tdingiz! ✅`);

    console.log(usersData);
  } else {
    bot.sendMessage(
      chatId,
      `
    ⚠️ Kechirasiz, men sizning xabaringizni tushunmadim.

Iltimos, quyidagi tugmani bosing 👇
/start

    `,
      {
        reply_markup: {
          keyboard: [[{ text: `Asosiy menyuga qaytish` }]],
          resize_keyboard: true,
        },
      }
    );
  }
});

console.log("Bot ishga tushdi...");
