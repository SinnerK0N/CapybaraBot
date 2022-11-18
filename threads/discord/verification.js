const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");
const configManager = require("../../config/manager.js");
let newMemberReaction = Array();

module.exports = {
    memberAdd: async function(member)
    {
        const discordBot = require("./core.js");

        let role = member.guild.roles.cache.find(role => role.id === "972439478947971084");
        member.roles.add(role);
        let emote = discordBot.generateRandomEmote();

        let message = "Welcome " + "<@" + member.id + ">" + "! Press the button with " + emote + " to verify you are not a bot.";
        const buttons = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("to_je_hokej")
                    .setLabel("🏒")
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId("supr")
                    .setLabel("🍦")
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId("monke")
                    .setLabel("🐒")
                    .setStyle(ButtonStyle.Secondary)
            );

        //let message_id = await discordBot.Messaging.sendMsgWithComponentsToChannel("verification", message, buttons); I FUCKIGNG QBN USJFBJC KBCNZCZUC HI K
        setTimeout(async function() {
            await discordBot.getBot().channels.fetch("972494733475737620").then(async channelId => {
                await channelId.send({content: message, components: [buttons]}).then(async msg => {
                    newMemberReaction[newMemberReaction.length] = [member.id, msg.id, emote];
                });
            });
        }, 1000);
    },

    buttonClick: async function(interaction)
    {
        let idx_in_array = -1;
        let emote = -1;
        for (let i = 0; i < newMemberReaction.length; i++)
        {
            if (newMemberReaction[i][1] == interaction.message.id)
            {
                idx_in_array = i;
            }
        }

        if (idx_in_array == -1)
            return;

        switch (newMemberReaction[idx_in_array][2])
        {
            case "🏒":
                emote = "to_je_hokej";
                break;
            case "🍦":
                emote = "supr";
                break;
            case "🐒":
                emote = "monke";
                break;
            default:
                break;
        }

        if (emote == -1)
            return;

        if (interaction.customId != emote && interaction.member.id == newMemberReaction[idx_in_array][0])
        {
            await interaction.member.kick("Failed to verify user.");
            const buttons = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId("to_je_hokej")
                        .setLabel("🏒")
                        .setStyle(ButtonStyle.Secondary)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("supr")
                        .setLabel("🍦")
                        .setStyle(ButtonStyle.Secondary)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("monke")
                        .setLabel("🐒")
                        .setStyle(ButtonStyle.Secondary)
                        .setDisabled(true)
                );
            await interaction.message.edit({ content: interaction.message.content, components: [buttons] });
            setTimeout(async function() {
                await interaction.editReply({ content: interaction.member.user.tag + " clicked the wrong button and got kicked.", components: [] });
            }, 300);
        }
        else
        {
            if (interaction.member.id != newMemberReaction[idx_in_array][0])
                return;

            let role = interaction.guild.roles.cache.find(role => role.id === "972812102777577532");
            await interaction.member.roles.add(role);
            role = interaction.guild.roles.cache.find(role => role.id === "972439478947971084");
            await interaction.member.roles.remove(role);
            const buttons = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId("to_je_hokej")
                        .setLabel("🏒")
                        .setStyle(ButtonStyle.Secondary)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("supr")
                        .setLabel("🍦")
                        .setStyle(ButtonStyle.Secondary)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("monke")
                        .setLabel("🐒")
                        .setStyle(ButtonStyle.Secondary)
                        .setDisabled(true)
                );

            await interaction.message.edit({ content: interaction.message.content, components: [buttons] });
            setTimeout(async function(){
                await interaction.editReply({ content: interaction.member.user.tag + " clicked the correct button and got verified.", components: [] });
            }, 300);
        }
    }
}