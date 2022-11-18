const {PermissionsBitField, EmbedBuilder} = require("discord.js");
const utilsGeneral = require("../../../utils/utils.js");
const utilsSteam = require("../../../utils/steam.js");
const configManager = require("../../../config/manager.js");
const SteamAPI = require("steamapi");
const SteamID = require("steamid");
const logger = require("../../../utils/logger.js");

let steamKey;
configManager.getConfig("main").then(cfg => {
    steamKey = cfg.secrets.steam;
});
const steam = new SteamAPI({ key: steamKey });

module.exports = {
    Run: async function(interaction)
    {
        const discordBot = require("../core.js");
        /*
            Moderation
        */
        if (interaction.commandName == "kick")
        {
            if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers))
            {
                await interaction.editReply("You don't have the permissions to do that!");
                return;
            }

            let user = interaction.options.getUser("user");
            await interaction.guild.members.cache.get(user).kick();
            await interaction.editReply("<@" + user.id + "> was kicked.");
        }
        if (interaction.commandName == "ban")
        {
            if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers))
            {
                await interaction.editReply("You don't have the permissions to do that!");
                return;
            }

            let user = interaction.options.getUser("user");
            await interaction.guild.members.cache.get(user).ban();
            await interaction.editReply("<@" + user.id + "> was banned.");
        }



        /*
            BTD6
        */
        if (interaction.commandName == "btd6_bloon")
        {
            let param = utilsGeneral.btdApiFixInput(interaction.options.getString("bloon"));
            let url = "https://statsnite.com/images/btd/bloons/" + param + "/base.png";
            try
            {
                if (await utilsGeneral.retrieveResponseStatus(url) == 200)
                {
                    await interaction.editReply({files: [{
                            attachment: url,
                            name: param + ".png"
                        }]});
                }
                else
                {
                    await interaction.editReply("Error! Server responded with error or hasn't responded.");
                }
            }
            catch
            {
                await interaction.editReply("Error! Server responded with AAAAA!!!!!");
            }
        }
        if (interaction.commandName == "btd6_hero")
        {
            let param = utilsGeneral.btdApiFixInput(interaction.options.getString("hero"));
            let lvl = interaction.options.getString("level");
            let url;
            if (!isNaN(lvl) && lvl >= 0 && lvl != null)
                url = "https://statsnite.com/images/btd/heroes/" + param + "/" + lvl + ".png";
            else
                url = "https://statsnite.com/images/btd/heroes/" + param + "/hero.png";
            try
            {
                if (await utilsGeneral.retrieveResponseStatus(url) == 200)
                {
                    await interaction.editReply({files: [{
                            attachment: url,
                            name: param + ".png"
                        }]});
                }
                else
                {
                    await interaction.editReply("Error! Server responded with error or hasn't responded.");
                }
            }
            catch
            {
                await interaction.editReply("Error! Server responded with AAAAA!!!!!");
            }
        }
        if (interaction.commandName == "btd6_hero_skin")
        {
            let param = utilsGeneral.btdApiFixInput(interaction.options.getString("hero"));
            let skin = utilsGeneral.btdApiFixInput(interaction.options.getString("skin"));
            let lvl = interaction.options.getString("level");
            let url;
            if (!isNaN(lvl) && lvl >= 0 && lvl != null)
                url = "https://statsnite.com/images/btd/heroes/" + param + "/" + skin + "/" + lvl + ".png";
            else
                url = "https://statsnite.com/images/btd/heroes/" + param + "/" + skin + "/hero.png";
            try
            {
                if (await utilsGeneral.retrieveResponseStatus(url) == 200)
                {
                    await interaction.editReply({files: [{
                            attachment: url,
                            name: param + ".png"
                        }]});
                }
                else
                {
                    await interaction.editReply("Error! Server responded with error or hasn't responded.");
                }
            }
            catch
            {
                await interaction.editReply("Error! Server responded with AAAAA!!!!!");
            }
        }
        if (interaction.commandName == "btd6_tower")
        {
            let param = utilsGeneral.btdApiFixInput(interaction.options.getString("tower"));
            let lvl = interaction.options.getString("level");
            let url;
            if (!isNaN(lvl) && lvl >= 0 && lvl != null)
                url = "https://statsnite.com/images/btd/towers/" + param + "/" + lvl + ".png";
            else
                url = "https://statsnite.com/images/btd/towers/" + param + "/tower.png";
            try
            {
                if (await utilsGeneral.retrieveResponseStatus(url) == 200)
                {
                    await interaction.editReply({files: [{
                            attachment: url,
                            name: param + ".png"
                        }]});
                }
                else
                {
                    await interaction.editReply("Error! Server responded with error or hasn't responded.");
                }
            }
            catch
            {
                await interaction.editReply("Error! Server responded with AAAAA!!!!!");
            }
        }

        /*
            Steam
        */
        if (interaction.commandName == "steam_info")
        {
            let param = utilsSteam.steamApiFixInput(interaction.options.getString("id"));
            try
            {
                await steam.resolve(param.toString()).then(async id => {
                    await steam.getUserSummary(id).then(async summary => {
                        const embed = new EmbedBuilder()
                            .setTitle(summary.nickname)
                            .setURL("https://steamcommunity.com/profiles/" + summary.steamID)
                            .setThumbnail(summary.avatar.large)
                            .addFields(
                                { name: "Created at", value: new Date(summary.createdAt).toLocaleDateString("cs-CZ", { weekday: 'short', year: 'numeric', month: 'long', day: '2-digit', hour: 'numeric', minute: '2-digit', second: '2-digit' }), inline: true },
                                { name: "Last log off", value: new Date(summary.lastLogOffAt).toLocaleDateString("cs-CZ", { weekday: 'short', year: 'numeric', month: 'long', day: '2-digit', hour: 'numeric', minute: '2-digit', second: '2-digit' }), inline: true },
                                { name: "Persona state", value: utilsSteam.steamPersonaStateToString(summary.personaState), inline: true },
                                { name: "Community visibility", value: utilsSteam.steamVisibilityStateToString(summary.visibilityState), inline: true },
                                { name: "Comment permission", value: utilsSteam.steamCommentPermissionToString(summary.commentPermission), inline: true },
                                { name: "\u200b", value: "\u200b", inline: true},
                                { name: "Real name", value: utilsGeneral.undefinedToUndefined(summary.realName), inline: true },
                                { name: "Location", value: utilsSteam.steamFormatLocation(summary.countryCode, summary.stateCode, summary.cityID), inline: true },
                                { name: "\u200b", value: "\u200b", inline: true},
                                { name: "SteamID64", value: summary.steamID, inline: true },
                                { name: "SteamID2", value: new SteamID(summary.steamID).getSteam2RenderedID(true), inline: true },
                                { name: "SteamID3", value: new SteamID(summary.steamID).getSteam3RenderedID(), inline: true },
                            )
                        await interaction.editReply({ embeds: [embed] });
                    });
                });
            }
            catch
            {
                await interaction.editReply("Error! Given SteamID isn't in correct format.\nSteamID must have one of the following formats (X = random number):\nSTEAM_0:1:XXXXXXXXX / 111XXXXXX / [U:1:XXXXXXXXXX] / 765XXXXXXXXXXXXXX / <https://steamcommunity.com/profiles/765XXXXXXXXXXXXX> / <https://steamcommunity.com/id/CUSTOM_URL>");
            }
        }


        /*
            Misc
        */
        if (interaction.commandName == "cat")
        {
            try
            {
                if (await utilsGeneral.retrieveResponseStatus("https://thiscatdoesnotexist.com/") == 200)
                {
                    await interaction.editReply({files: [{
                            attachment: "https://thiscatdoesnotexist.com/",
                            name: "kitkat.png"
                        }]});
                }
                else
                {
                    await interaction.editReply("Error! Server responded with error or hasn't responded.");
                }
            }
            catch
            {
                await interaction.editReply("Error! Server responded with AAAAA!!!!!");
            }
        }
        if (interaction.commandName == "avatar")
        {
            let user = interaction.options.getUser("user");
            await interaction.editReply(user.avatarURL() + "?size=512");
        }
        if (interaction.commandName == "user")
        {
            let user = interaction.options.getUser("user");
            const embed = new EmbedBuilder()
                .setTitle(user.username)
                .setURL("https://discord.com/users/" + user.id)
                .setThumbnail(user.avatarURL())
                .addFields(
                    { name: "Tag", value: user.tag, inline: true },
                    { name: "ID", value: user.id, inline: true },
                    { name: "Is bot", value: user.bot ? "true" : "false", inline: true },
                    { name: "Created at", value: new Date(user.createdAt).toLocaleDateString("cs-CZ", { weekday: 'short', year: 'numeric', month: 'long', day: '2-digit', hour: 'numeric', minute: '2-digit', second: '2-digit' }), inline: true },
                    { name: "Avatar URL", value: user.avatarURL(), inline: true },
                    //{ name: "Banner URL", value: user.bannerURL(), inline: true },
                )
            await interaction.editReply({ embeds: [embed] });
        }
        if (interaction.commandName == "send_message")
        {
            if (interaction.member.id != "619177404530688000")
            {
                await interaction.editReply("You don't have the permissions to do that!");
                return;
            }

            await discordBot.Messaging.sendMsgToChannel(interaction.options.getChannel("channel").id, interaction.options.getString("message"));
            await interaction.editReply("Sent your message to <#" + interaction.options.getChannel("channel").id + ">.");
        }
    }
}
