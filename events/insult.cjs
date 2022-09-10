const insults = [
	", go fuck yourself.",
	", eat a dick.",
	", "
]

const openingText = [
	"Hello, ",
	"Welcome, ",
	"Oh god, it's ",
]

const getUsername = () => {
	return "peepee"
}

export const replyWithInsult = () => {
	const opener = openingText[Math.random() * openingText.length | 0]
	const insult = insults[Math.random() * insults.length | 0]

	return (opener, getUsername(), insult);
}

module.exports = {
	name: 'guildMemberAdd',
	execute(interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	},
};