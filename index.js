const config = require("./config.json");
const Discord = require("discord.js");
const sto = require("./sto.js");
const bns = require("./bns.js");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Connected to the chat server!");
});

client.on("message", message => {
  if (message.content === "What to play this time?") {
    console.log(message.channel.name);
    switch (message.channel.name) {
      case "what-to-play-in-sto":
        message.channel.send(sto.rollSTO());
        break;
      case "what-to-play-in-bns":
        message.channel.send(bns.rollBnS());
        break;
      default:
        message.channel.send("I have no clue.");
        break;
    }
  }
});

client.login(config.token);
