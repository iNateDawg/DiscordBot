// const R6StatsAPI = require('@r6stats/node')
// const { SlashCommandBuilder } = require('discord.js');

// const api = new R6StatsAPI({ apiKey: '1217' })

// module.exports = {
// 	data: new SlashCommandBuilder()
// 		.setName('stats')
// 		.setDescription('Replies with Pong!')
// 		.addStringOption(option =>
// 			option.setName('username')
// 				.setDescription('Username on R6')
// 				.setRequired(true))
// 		.addStringOption(option =>
// 			option.setName('platform')
// 				.setDescription('Platform: PC (default), Xbox, PS')
// 				.setRequired(false)),
// 	run: async (interaction, username, platform = 'pc') => {
// 		const player = await api.playerStats({ username: 'xxx', platform: 'pc' })
// 		console.log(player.username)
// 		interaction.reply(player.username, player.stats.general.kills)
// 	}
// }

