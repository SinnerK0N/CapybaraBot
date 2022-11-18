var os = require("os");
const si = require("systeminformation");
const fs = require("fs");
var ping = require('ping');
const rss = require("rss-converter");

const utilsNet = require("./utils/network.js");
const utilsDiscord = require("./utils/discord.js");
const utilsSteam = require("./utils/steam.js");
const utilsGeneral = require("./utils/utils.js");

require("./threads/discord/core.js").initializeBot();

/*
function roles()
{
    const row = new ActionRowBuilder()
        .addComponents(
            new SelectMenuBuilder()
                .setCustomId('selectGames')
                .setPlaceholder('Nothing selected')
                .setMinValues(1)
                .setMaxValues(10)
                .addOptions(
                    {
                        label: 'Bloons TD 6',
                        description: 'Gives you access to Bloons TD 6 related channels',
                        value: 'btd6',
                    },
                    {
                        label: 'Don\'t Starve Together',
                        description: 'Gives you access to Don\'t Starve Together related channels',
                        value: 'dst',
                    },
                    {
                        label: 'Euro Truck Simulator 2',
                        description: 'Gives you access to Euro Truck Simulator 2 related channels',
                        value: 'ets2',
                    },
                    {
                        label: 'Rocket League',
                        description: 'Gives you access to Rocket League related channels',
                        value: 'rocket',
                    },
                    {
                        label: 'Clash Royale and Clash of Clans',
                        description: 'Gives you access to Clash Royale and Clash of Clans related channels',
                        value: 'clash',
                    },
                    {
                        label: 'Witch It',
                        description: 'Gives you access to Witch It related channels',
                        value: 'witch',
                    },
                    {
                        label: 'Knockout City',
                        description: 'Gives you access to Knockout City related channels',
                        value: 'koc',
                    },
                    {
                        label: 'Counter Strike',
                        description: 'Gives you access to Counter Strike related channels',
                        value: 'cs',
                    },
                    {
                        label: 'Team Fortress 2',
                        description: 'Gives you access to Team Fortress 2 related channels',
                        value: 'tf2',
                    },
                    {
                        label: 'Among Us',
                        description: 'Gives you access to Among Us related channels',
                        value: 'among',
                    },
                ),
        );
    sendComponentsToChannel("981287270579601418", "Game specific channel roles", row);

    const rowA = new ActionRowBuilder()
        .addComponents(
            new SelectMenuBuilder()
                .setCustomId('selectServer')
                .setPlaceholder('Nothing selected')
                .setMinValues(1)
                .setMaxValues(3)
                .addOptions(
                    {
                        label: 'Video uploads',
                        description: 'Gives you access to YouTube video upload channel',
                        value: 'uploads',
                    },
                    {
                        label: 'Tech & programming',
                        description: 'Gives you access to tech and programming related channel',
                        value: 'tech',
                    },
                    {
                        label: 'Memes',
                        description: 'Gives you access to the meme channel',
                        value: 'memes',
                    },
                ),
        );
    sendComponentsToChannel("981287270579601418", "Server specific channel roles", rowA);
}
 */
