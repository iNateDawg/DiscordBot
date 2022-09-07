const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { token } = require('./config.json');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers,
	]
	
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'src/commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => { file.endsWith('.js') });

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath)
	client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) {
		return;
	}
	console.log("test1")
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


client.login(token);