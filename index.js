const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");

client.user.setActivity("*help To Start", { type: "STREAMING" });

// Set the prefix
const prefix = "*";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "help")) {
    message.author.send("Description");
    // This Is A DM Command Just replace channel with author To Turn It To a Dm Command.
  } else
  if (message.content.startsWith(prefix + "*name")) {
    message.channel.send("Description");
  }

if (message.content.startsWith(prefix + "name")) {
    message.channel.send("Description");
  }

});


});


client.login("Your Token");
// This Is A Simple Bot I will Post More Later On.
