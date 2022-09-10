import { Client, Collection, GatewayIntentBits } from 'discord.js';
import http from 'http';
import { build } from 'builder'
import deployCommands from './deploy-commands';

http.createServer((req, res) => res.end('Bot is alive!')).listen(3000)

const botStart = (token, clientId, deploy) => {

	const client = new Client({
		intents: [
			GatewayIntentBits.Guilds,
			GatewayIntentBits.GuildMessages,
			GatewayIntentBits.GuildMembers,
		],
		partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER', 'GUILD_MEMBERS', "GUILD_MEMBERS"]

	});

	if(deploy === true){
		deployCommands(token, clientId);
		return;
	}

	build(client)

	client.login(process.env.DISCORD_TOKEN);
}
