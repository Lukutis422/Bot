import { sendModLog } from "../utils/logger.js";

export default {
  name: "kick",
  async execute(message) {
    if (!message.member.permissions.has("KickMembers"))
      return message.reply("Neturi leidimo.");

    const user = message.mentions.members.first();
    if (!user) return message.reply("Pažymėk vartotoją.");

    await user.kick();
    message.reply("Vartotojas išmestas.");

    sendModLog(message.guild, `${user.user.tag} buvo išmestas.`);
  }
};
