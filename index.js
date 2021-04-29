const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");

client.user.setActivity("Your Status", { type: "Presence Here" });
// Set Your Status And Presence Here, There Are 4 Precenses, dnd - Do Not Disturb, ONLINE - Online mode, STREAMING - Gives You A Purple Play Button As Your Presence, IDLE - Idle Mode
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
