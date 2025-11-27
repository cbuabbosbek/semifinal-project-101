import { bot } from "../index.js";

function onRegister(chatId) {

  bot.sendMessage(chatId, `Tabriklaymiz, siz ro'yhatdan o'tdingiz! ✅`);

}

export { onRegister };
