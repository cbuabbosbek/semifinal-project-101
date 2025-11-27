import { bot } from "../index.js";
import User from "./models/User.js";

async function onUsers(chatId) {
  console.log(`onUsers...`);

  const userSoni = await User.countDocuments();

  bot.sendMessage(chatId, `Foydalanuvchilar soni: ${userSoni}`);
}

export default onUsers;
