// import TelegramBot from "node-telegram-bot-api";
import TelegramBot from "node-telegram-bot-api";
import { config } from "dotenv";
import { onStart } from "./src/onStart.js";
import { onCourses } from "./src/onCourses.js";
import { onRegister } from "./src/onRegister.js";

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
    onStart(chatId, firstName);
  } else if (text == "📚 Kurslar") {
    onCourses(chatId);
  } else if (text == "ℹ️ Markaz haqida") {
    bot.sendMessage(chatId, "📍 Bizning o‘quv markaz joylashuvi:");
    bot.sendLocation(chatId, 41.3781989, 60.3694056);
  } else if (text == "✍️ Ro‘yxatdan o‘tish") {
    onRegister(chatId);
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

export { bot };
