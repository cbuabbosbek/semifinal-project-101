// import TelegramBot from "node-telegram-bot-api";
import TelegramBot from "node-telegram-bot-api";
import { config } from "dotenv";
import { onStart } from "./src/onStart.js";
import { onCourses } from "./src/onCourses.js";
import { onRegister } from "./src/onRegister.js";
import mongoose from "mongoose";
import onUsers from "./src/onUsers.js";
config();

const TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    cansole.log(`Db is connected successfully...`);
  })
  .then(() => {
    console.log(`Congratulations!`);
  })
  .catch(() => {
    console.log(`Error: db is not connected..!!`);
  });

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
  } else if (text == "/users") {
    onUsers(chatId);
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
