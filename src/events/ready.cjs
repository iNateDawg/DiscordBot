const { deployCommands } = require("../deploy-commands.js")

module.exports = {
	name: 'ready',
	once: true,
	run: async (token, clientId) => {
		await deployCommands(token, clientId)
	}
};
