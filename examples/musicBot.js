const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const Bot = new Discord.Client();
const token = "NDA0MDMzNDQyMzM0OTAwMjI0.Dk8UOg._9OrO7FGekPSxLdB10HmDWkm-MU" // Recommended to load from json file.

Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});

music(Bot, {
	prefix: '-',       // Prefix of '-'.
	global: false,     // Server-specific queues.
	maxQueueSize: 10,  // Maximum queue size of 10.
	clearInvoker: true, // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
    channel: 'music'   // Name of voice channel to join. If omitted, will instead join user's voice channel.
});
Bot.login(NDA0MDMzNDQyMzM0OTAwMjI0.Dk8UOg._9OrO7FGekPSxLdB10HmDWkm-MU);
