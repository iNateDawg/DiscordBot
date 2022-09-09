
import { REST } from '@discordjs/rest';
import { Routes } from 'discord.js';
import id from './config.json'assert {type: 'json'};
import fs from 'fs';
import path from 'path';
import url from 'url';

const commands = [];
const commandsPath = path.join(process.cwd(), '/commands');
const commandFiles = fs.readdirSync(commandsPath)
console.log(commandFiles)

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = await import(url.pathToFileURL(filePath))
	commands.push(command.default.data.toJSON());
}


const rest = new REST({ version: '10' }).setToken(id.token);

// (async () => {
// 	try {
// 		console.log(`Started refreshing ${commands.length} application (/) commands.`);

// 		const data = await rest.put(
// 			Routes.applicationCommands(clientId),
// 			{ body: commands },
// 		);

// 		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
// 	} catch (error) {
// 		console.error(error);
// 	}
// })();


	rest.put(Routes.applicationCommands(id.clientId), { body: commands })
		.then((data) => { console.log(`Successfully registered ${data.length} application commands.`) })
		.catch(console.error);