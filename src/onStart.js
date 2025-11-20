import { bot } from "../index.js";

function onStart(chatId, firstName) {
  console.log(`onStart...!`);

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
}

export { onStart };
