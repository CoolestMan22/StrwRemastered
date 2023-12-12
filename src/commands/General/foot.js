const { SlashCommandBuilder } = require("discord.js");
const chalk = require("chalk");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("reemfoot")
    .setDescription("Foot someone"),
  async execute(interaction) {
    interaction.channel.messages.fetch({ limit: 1 }).then((messages) => {
      messages.first().react("🦶");
      messages.first().react("⬅️");
      messages.first().react("🇫");
      messages.first().react("🇴");
      messages.first().react("0️⃣");
      messages.first().react("🇹");
    });

    await interaction.reply({
      content: "Footed",
      ephemeral: true,
    });
  },
  color: chalk.hex("#DEADED"),
};