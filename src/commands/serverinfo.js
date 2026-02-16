import { EmbedBuilder } from "discord.js";

export default {
  name: "serverinfo",
  async execute(message) {
    const embed = new EmbedBuilder()
      .setTitle("Serverio informacija")
      .addFields(
        { name: "Pavadinimas", value: message.guild.name, inline: true },
        { name: "Nariai", value: `${message.guild.memberCount}`, inline: true }
      )
      .setColor(0x5865F2);

    message.reply({ embeds: [embed] });
  }
};
