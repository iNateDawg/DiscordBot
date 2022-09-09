import { SlashCommandBuilder } from 'discord.js';

const config = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	execute: async execute(interaction) {
		await interaction.reply('Pong!');
	}
};

export default config
