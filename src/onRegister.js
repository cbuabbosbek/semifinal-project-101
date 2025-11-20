import { bot } from "../index.js";

function onRegister(chatId) {
  console.log(`onRegister...!`);

  bot.sendMessage(chatId, `Tabriklaymiz, siz ro'yhatdan o'tdingiz! ✅`);

}

export { onRegister };
