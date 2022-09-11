
import botStart from "./src/bot-start.js";
// Uncomment to use in replit, keeps replit server alive
//import http from 'http';
// http.createServer((req, res) => res.end('Bot is alive!')).listen(3000)

let token = ""
let clientId = ""
let deploy = false

const myArgs = process.argv.slice(2);
console.log(myArgs)
myArgs.forEach((item, i, arr) => {

	if (item === '-d') {
		deploy = true
	}
	else if (item === '-t') {
		token = arr[i + 1]
	}
	else if (item === '-i') {
		clientId = arr[i + 1]
	}

})

if ((token || clientId) !== "")
	botStart(token, clientId, deploy)
else
	console.error("\nPlease provide a valid token and clientId e.g. \"yarn start -t <TOKEN> -i <CLIENT_ID>\"\n")



