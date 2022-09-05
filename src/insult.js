const { Client, GatewayIntentBits } = require('discord.js');

const insults = [
    ", go fuck yourself.",
    ", eat a dick.",
    ", "
]

const openingText = [
    "Hello, ",
    "Welcome, ",
    "Oh god, it's "
]

const getUsername = () => {

    client.on('guildMemberAdd', interaction => {
        return replyWithInsult()
    });

}

export default replyWithInsult = (interaction) => {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    const opener = openingText[Math.random() * openingText.length | 0] 
    const insult = insults[Math.random() * insults.length | 0]

    return opener + getUsername()
}