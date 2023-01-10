const {EmbedBuilder} = require("discord.js");
const configManager = require("../../../config/manager.js");

module.exports = {
    Run: async function(interaction)
    {
        let addedRoles = Array(), removedRoles = Array(), keptRoles = Array();

        let config;
        await configManager.getConfig("main").then(cfg => {
            config = cfg;
        });
        /*

            GAMES

         */
        if (interaction.customId == "selectGames")
        {
            if (interaction.values.includes("btd6")) {
                if (interaction.member.roles.cache.find(role => role.id === config.roles.games.btd6)) {
                    keptRoles.push("Bloons TD 6");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.btd6);
                    await interaction.member.roles.add(role);
                    addedRoles.push("Bloons TD 6");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === config.roles.games.btd6)) {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.btd6);
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Bloons TD 6")
                }
            }

            if (interaction.values.includes("dst")) {
                if (interaction.member.roles.cache.find(role => role.id === config.roles.games.dst)) {
                    keptRoles.push("Don't Starve Together");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.dst);
                    await interaction.member.roles.add(role);
                    addedRoles.push("Don't Starve Together");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === config.roles.games.dst)) {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.dst);
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Don't Starve Together")
                }
            }

            if (interaction.values.includes("ets2")) {
                if (interaction.member.roles.cache.find(role => role.id === config.roles.games.ets2)) {
                    keptRoles.push("Euro Truck Simulator 2");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.ets2);
                    await interaction.member.roles.add(role);
                    addedRoles.push("Euro Truck Simulator 2");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === config.roles.games.ets2)) {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.ets2);
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Euro Truck Simulator 2")
                }
            }

            if (interaction.values.includes("rocket")) {
                if (interaction.member.roles.cache.find(role => role.id === config.roles.games.rocket)) {
                    keptRoles.push("Rocket League");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.rocket);
                    await interaction.member.roles.add(role);
                    addedRoles.push("Rocket League");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === config.roles.games.rocket)) {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.rocket);
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Rocket League")
                }
            }

            if (interaction.values.includes("clash")) {
                if (interaction.member.roles.cache.find(role => role.id === config.roles.games.clash)) {
                    keptRoles.push("Clash Royale & Clash of Clans");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.clash);
                    await interaction.member.roles.add(role);
                    addedRoles.push("Clash Royale & Clash of Clans");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === config.roles.games.clash)) {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.clash);
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Clash Royale & Clash of Clans")
                }
            }

            if (interaction.values.includes("witch")) {
                if (interaction.member.roles.cache.find(role => role.id === config.roles.games.witch_it)) {
                    keptRoles.push("Witch It");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.witch_it);
                    await interaction.member.roles.add(role);
                    addedRoles.push("Witch It");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === config.roles.games.witch_it)) {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.witch_it);
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Witch It")
                }
            }

            if (interaction.values.includes("koc")) {
                if (interaction.member.roles.cache.find(role => role.id === config.roles.games.koc)) {
                    keptRoles.push("Knockout City");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.koc);
                    await interaction.member.roles.add(role);
                    addedRoles.push("Knockout City");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === config.roles.games.koc)) {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.koc);
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Knockout City")
                }
            }

            if (interaction.values.includes("cs")) {
                if (interaction.member.roles.cache.find(role => role.id === config.roles.games.cs)) {
                    keptRoles.push("Counter Strike");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.cs);
                    await interaction.member.roles.add(role);
                    addedRoles.push("Counter Strike");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === config.roles.games.cs)) {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.cs);
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Counter Strike")
                }
            }

            if (interaction.values.includes("tf2")) {
                if (interaction.member.roles.cache.find(role => role.id === config.roles.games.tf2)) {
                    keptRoles.push("Team Fortress 2");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.tf2);
                    await interaction.member.roles.add(role);
                    addedRoles.push("Team Fortress 2");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === config.roles.games.tf2)) {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.tf2);
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Team Fortress 2")
                }
            }

            if (interaction.values.includes("among")) {
                if (interaction.member.roles.cache.find(role => role.id === config.roles.games.amogus)) {
                    keptRoles.push("Among Us");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.amogus);
                    await interaction.member.roles.add(role);
                    addedRoles.push("Among Us");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === config.roles.games.amogus)) {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.amogus);
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Among Us")
                }
            }

            if (interaction.values.includes("sot")) {
                if (interaction.member.roles.cache.find(role => role.id === config.roles.games.sot)) {
                    keptRoles.push("Sea of Thieves");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.sot);
                    await interaction.member.roles.add(role);
                    addedRoles.push("Sea of Thieves");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === config.roles.games.sot)) {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.sot);
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Sea of Thieves")
                }
            }

            if (interaction.values.includes("mc")) {
                if (interaction.member.roles.cache.find(role => role.id === config.roles.games.sot)) {
                    keptRoles.push("Minecraft");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.sot);
                    await interaction.member.roles.add(role);
                    addedRoles.push("Minecraft");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === config.roles.games.sot)) {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.games.sot);
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Minecraft")
                }
            }
        }

        /*

            MISC

         */
        if (interaction.customId == "selectServer") {
            if (interaction.values.includes("uploads")) {
                if (interaction.member.roles.cache.find(role => role.id === config.roles.server.uploads)) {
                    keptRoles.push("Video uploads");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.server.uploads);
                    await interaction.member.roles.add(role);
                    addedRoles.push("Video uploads");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === config.roles.server.uploads)) {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.server.uploads);
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Video uploads")
                }
            }

            if (interaction.values.includes("tech")) {
                if (interaction.member.roles.cache.find(role => role.id === config.roles.server.tech)) {
                    keptRoles.push("Tech & programming");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.server.tech);
                    await interaction.member.roles.add(role);
                    addedRoles.push("Tech & programming");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === config.roles.server.tech)) {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.server.tech);
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Tech & programming")
                }
            }

            if (interaction.values.includes("memes")) {
                if (interaction.member.roles.cache.find(role => role.id === config.roles.server.memes)) {
                    keptRoles.push("Memes");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.server.memes);
                    await interaction.member.roles.add(role);
                    addedRoles.push("Memes");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === config.roles.server.memes)) {
                    let role = interaction.guild.roles.cache.find(role => role.id === config.roles.server.memes);
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Memes")
                }
            }
        }

        let addedRolesFormatted = "\u200b", removedRolesFormatted = "\u200b", keptRolesFormatted = "\u200b";
        addedRoles.forEach(elem => {
            addedRolesFormatted += "🟢" + elem.toString() + "\n"
        });
        removedRoles.forEach(elem => {
            removedRolesFormatted += "🔴" + elem.toString() + "\n"
        });
        keptRoles.forEach(elem => {
            keptRolesFormatted += "🔵" + elem.toString() + "\n"
        });

        const embed = new EmbedBuilder()
            .setTitle("Role update overview")
            .addFields(
                {name: "Added roles", value: addedRolesFormatted.toString() },
                {name: "\nRemoved roles", value: removedRolesFormatted.toString() },
                {name: "\nKept roles", value: keptRolesFormatted.toString() },
            )

        await interaction.followUp( {embeds: [embed]} );
    }
}
