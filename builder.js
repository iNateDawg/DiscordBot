
import { Client, Collection, GatewayIntentBits } from 'discord.js';
import fs from 'fs';
import path from 'path';
import url from 'url'

client.commands = new Collection();

const getFiles = (filePath) => {
	const filesPath = path.join(process.cwd(), filePath);
	const botFiles = fs.readdirSync(filesPath)

	return { botFiles, filesPath }
}

const buildEvents = async (client) => {

	const events = getFiles("/events")

	for (const file of events.botfiles) {

		const filePath = path.join(events.filesPath, file);
		const event = await import(url.pathToFileURL(filePath))
		console.log(event)
		if (type === "c") {
			client.commands.set(event.data.name, event);
		}
		else if (type === "e") {
			if (event.once) {
				client.once(event.name, (...args) => event.run(...args));
			} else {
				client.on(event.name, (...args) => event.run(...args));
			}
		}
	}

	return client
}

const buildCommands = async (client) => {

	client.commands = new Collection();

	const commands = getFiles('/commands')

	for (const file of commands.botFiles) {

		const filePath = path.join(commands.filesPath, file);
		const command = await import(url.pathToFileURL(filePath))
		console.log(command)
		client.commands.set(command.data.name, command);
	}

	return client
}

const build = async (client) => {
	const newClient = buildCommands(client)
	newClient = buildEvents(client)
	return newClient
}

export default { build }