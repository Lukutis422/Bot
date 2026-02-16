import { sendModLog } from "../utils/logger.js";

export default {
  name: "ban",
  async execute(message, args) {
    if (!message.member.permissions.has("BanMembers"))
      return message.reply("Neturi leidimo.");

    const user = message.mentions.members.first();
    if (!user) return message.reply("Pažymėk vartotoją.");

    await user.ban();
    message.reply("Vartotojas užblokuotas.");

    sendModLog(message.guild, `${user.user.tag} buvo užblokuotas.`);
  }
};
