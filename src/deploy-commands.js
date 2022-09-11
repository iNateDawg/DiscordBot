
import { REST } from '@discordjs/rest';
import { Routes } from 'discord.js';
import fs from 'fs';
import path from 'path';
import url from 'url';

const deployCommands = async ( token, clientId ) => {
	const commands = [];
	const commandsPath = path.join(process.cwd(), 'src/commands');
	const commandFiles = fs.readdirSync(commandsPath)
	console.log(commandFiles)

	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = await import(url.pathToFileURL(filePath))
		commands.push(command.default.data.toJSON());
	}

	const rest = new REST({ version: '10' }).setToken(token);

	rest.put(Routes.applicationCommands(clientId), { body: commands })
		.then((data) => { console.log(`Successfully registered ${data.length} application commands.`) })
		.catch(console.error);
}

export default { deployCommands }