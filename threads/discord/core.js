const logger = require("../../utils/logger.js");
const loopedThreads = require("../looped/core.js");
const configManager = require("../../config/manager.js");
require("dotenv").config();
let bIsConnected = false;

const { Client, ActionRowBuilder, ButtonBuilder, SelectMenuBuilder, PermissionsBitField, GatewayIntentBits, ChannelType, EmbedBuilder, ButtonStyle, ActivityType } = require("discord.js");
const bot = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildScheduledEvents, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.MessageContent ] });
const utilsGeneral = require("../../utils/utils.js");
const verificator = require("./verification.js");

let videos, announcements, rpi_status, members, verification;
configManager.getConfig("main").then(cfg => {
    videos = cfg.channels.videos;
    announcements = cfg.channels.announcements;
    rpi_status = cfg.channels.rpi_status;
    members = cfg.channels.members;
    verification = cfg.channels.verification;
});
function channelToID(channel)
{
    switch (channel)
    {
        case "videos":
            return videos;
        case "announcements":
            return announcements;
        case "rpi_status":
            return rpi_status;
        case "members":
            return members;
        case "verification":
            return verification;
        default:
            return channel;
    }
}

async function sendMsgToChannel(channel, messageContent) {
    let channelId = channelToID(channel);
    await bot.channels.fetch(channelId).then(async channelId => {
        await channelId.send(messageContent).then(msg => {
            return msg.id;
        });
    });
}

async function sendEmbedToChannel(channel, embed) {
    let channelId = channelToID(channel);
    await bot.channels.fetch(channelId).then(async channelId => {
        await channelId.send({embeds: [embed]}).then(msg => {
            return msg.id;
        });
    });
}

async function sendComponentsToChannel(channel, messageContent, messageComponents) {
    let channelId = channelToID(channel);
    await bot.channels.fetch(channelId).then(async channelId => {
        await channelId.send({content: messageContent, components: [messageComponents]}).then(msg => {
            return msg.id;
        });
    });
}

async function addReactionToMsg(channel, messageID, emote) {
    let channelId = channelToID(channel);
    await bot.channels.fetch(channelId).then(async channelId => {
        await channelId.messages.fetch(messageID).then(async msg => {
            await msg.react(emote);
        });
    });
}
module.exports = {
    initializeBot: async function()
    {
        await configManager.getConfig("main").then(cfg => {
            bot.login(cfg.secrets.discord);
        });
    },

    getBot: function()
    {
        return bot;
    },

    Messaging:
        {
            sendMsgToChannel: sendMsgToChannel,
            sendEmbedToChannel: sendEmbedToChannel,
            sendMsgWithComponentsToChannel: sendComponentsToChannel,
            addReactionToMsg: addReactionToMsg
        },

    generateRandomEmote: function()
    {
        let emoty = Array("🏒", "🍦", "🐒");
        return emoty[Math.floor(Math.random() * emoty.length)];
    }
}

bot.on("ready", async () => {
    bIsConnected = true;
    logger.info("Discord fired ready event");
    await loopedThreads.Run();
});

bot.on("error", async err => {
    bIsConnected = false;
    logger.error(err);
    while (!bIsConnected)
    {
        logger.warning("Reinitializing connection to Discord!")
        bot.destroy();
        utilsGeneral.sleep(300000);
        await configManager.getConfig("main").then(cfg => {
            bot.login(cfg.secrets.discord);
        });
        utilsGeneral.sleep(60000);
    }
});

bot.on("guildMemberAdd", async member => {
    await sendMsgToChannel("members", "<@" + member.id + "> (" + member.id + ") has joined.");
    await verificator.memberAdd(member);
});

bot.on("guildMemberRemove", async member => {
    await sendMsgToChannel("members", "<@" + member.id + "> (" + member.id + ") has left.");
});

bot.on("messageCreate", async msg => {
    if (msg.content.includes("kdo se ptal"))
    {
        msg.reply("Já!");
    }

    if (msg.content.includes("who asked"))
    {
        msg.reply("I asked!");
    }
});

bot.on("interactionCreate", async interaction => {
    if (interaction.isCommand())
    {
        await interaction.deferReply();
        const commands = require("./commands/core.js");
        await commands.Run(interaction);
    }

    if (interaction.isButton())
    {
        await interaction.deferReply();
        await verificator.buttonClick(interaction);
    }

    if (interaction.isSelectMenu())
    {
        await interaction.deferReply({ ephemeral: true });
        const select_menu = require("./select_menu/core.js");
        await select_menu.Run(interaction);
    }
});