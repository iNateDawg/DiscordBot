import { Client, GatewayIntentBits } from 'discord.js';
import  build  from './builder.js'
import deployCommands from './deploy-commands.js';


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
	
	console.log(token)
	client.login(process.env.DISCORD_TOKEN);
}

export default botStart
