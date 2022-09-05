import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord.js';
import { clientId, guildId, token } from './config.json';

const commands = [];
const commandsPath = join(__dirname, 'commands');
const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}