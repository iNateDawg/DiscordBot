import { Client, Collection, GatewayIntentBits } from 'discord.js';
import http from 'http';
import { start } from 'repl';
import { botStart } from import("./bot-start")

let token = ""
let clientId =""
let deploy = false

const myArgs = process.argv.slice(2);

myArgs.forEach((item, i, arr) => {
	if (item === '-d'){
		deploy = true
	}
	else if (item === '-t') {
		token = arr[i+1]
	}
	else if (item === '-i') {
		clientId = arr[i+1]
	}
})

botStart(token, clientId, deploy)


