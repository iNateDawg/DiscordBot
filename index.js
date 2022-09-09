import { Client, Collection, GatewayIntentBits } from 'discord.js';
import fs from 'fs';
import path from 'path';
import id from './config.json' assert {type: 'json'}
import url from 'url'

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers,
	],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER', 'GUILD_MEMBER']


});

client.commands = new Collection();

const commandsPath = path.join(process.cwd(), '/commands');
const commandFiles = fs.readdirSync(commandsPath)

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = await import(url.pathToFileURL(filePath))
	const commandData = JSON.stringify(command.data)
	
	console.log(command.default.data)
	client.commands.set(command.default.data.name, command);
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) {
		return;
	}
	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		return;
	}

	try {
		console.log("poop")
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(id.token);
