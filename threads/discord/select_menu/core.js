const {EmbedBuilder} = require("discord.js");

module.exports = {
    Run: async function(interaction)
    {
        let addedRoles = Array(), removedRoles = Array(), keptRoles = Array();

        /*

            GAMES

         */
        if (interaction.customId == "selectGames")
        {
            if (interaction.values.includes("btd6")) {
                if (interaction.member.roles.cache.find(role => role.id === "979409585775444078")) {
                    keptRoles.push("Bloons TD 6");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === "979409585775444078");
                    await interaction.member.roles.add(role);
                    addedRoles.push("Bloons TD 6");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === "979409585775444078")) {
                    let role = interaction.guild.roles.cache.find(role => role.id === "979409585775444078");
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Bloons TD 6")
                }
            }

            if (interaction.values.includes("dst")) {
                if (interaction.member.roles.cache.find(role => role.id === "980545073248882778")) {
                    keptRoles.push("Don't Starve Together");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === "980545073248882778");
                    await interaction.member.roles.add(role);
                    addedRoles.push("Don't Starve Together");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === "980545073248882778")) {
                    let role = interaction.guild.roles.cache.find(role => role.id === "980545073248882778");
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Don't Starve Together")
                }
            }

            if (interaction.values.includes("ets2")) {
                if (interaction.member.roles.cache.find(role => role.id === "980548604005589102")) {
                    keptRoles.push("Euro Truck Simulator 2");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === "980548604005589102");
                    await interaction.member.roles.add(role);
                    addedRoles.push("Euro Truck Simulator 2");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === "980548604005589102")) {
                    let role = interaction.guild.roles.cache.find(role => role.id === "980548604005589102");
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Euro Truck Simulator 2")
                }
            }

            if (interaction.values.includes("rocket")) {
                if (interaction.member.roles.cache.find(role => role.id === "979409812184006726")) {
                    keptRoles.push("Rocket League");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === "979409812184006726");
                    await interaction.member.roles.add(role);
                    addedRoles.push("Rocket League");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === "979409812184006726")) {
                    let role = interaction.guild.roles.cache.find(role => role.id === "979409812184006726");
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Rocket League")
                }
            }

            if (interaction.values.includes("clash")) {
                if (interaction.member.roles.cache.find(role => role.id === "980545507061559306")) {
                    keptRoles.push("Clash Royale & Clash of Clans");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === "980545507061559306");
                    await interaction.member.roles.add(role);
                    addedRoles.push("Clash Royale & Clash of Clans");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === "980545507061559306")) {
                    let role = interaction.guild.roles.cache.find(role => role.id === "980545507061559306");
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Clash Royale & Clash of Clans")
                }
            }

            if (interaction.values.includes("witch")) {
                if (interaction.member.roles.cache.find(role => role.id === "1016374326594916373")) {
                    keptRoles.push("Witch It");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1016374326594916373");
                    await interaction.member.roles.add(role);
                    addedRoles.push("Witch It");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === "1016374326594916373")) {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1016374326594916373");
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Witch It")
                }
            }

            if (interaction.values.includes("koc")) {
                if (interaction.member.roles.cache.find(role => role.id === "1021292381749915729")) {
                    keptRoles.push("Knockout City");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1021292381749915729");
                    await interaction.member.roles.add(role);
                    addedRoles.push("Knockout City");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === "1021292381749915729")) {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1021292381749915729");
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Knockout City")
                }
            }

            if (interaction.values.includes("cs")) {
                if (interaction.member.roles.cache.find(role => role.id === "1041751369855553656")) {
                    keptRoles.push("Counter Strike");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1041751369855553656");
                    await interaction.member.roles.add(role);
                    addedRoles.push("Counter Strike");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === "1041751369855553656")) {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1041751369855553656");
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Counter Strike")
                }
            }

            if (interaction.values.includes("tf2")) {
                if (interaction.member.roles.cache.find(role => role.id === "1041750209794953270")) {
                    keptRoles.push("Team Fortress 2");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1041750209794953270");
                    await interaction.member.roles.add(role);
                    addedRoles.push("Team Fortress 2");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === "1041750209794953270")) {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1041750209794953270");
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Team Fortress 2")
                }
            }

            if (interaction.values.includes("among")) {
                if (interaction.member.roles.cache.find(role => role.id === "1041750522924892162")) {
                    keptRoles.push("Among Us");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1041750522924892162");
                    await interaction.member.roles.add(role);
                    addedRoles.push("Among Us");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === "1041750522924892162")) {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1041750522924892162");
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Among Us")
                }
            }
        }

        /*

            MISC

         */
        if (interaction.customId == "selectServer") {
            if (interaction.values.includes("uploads")) {
                if (interaction.member.roles.cache.find(role => role.id === "1041750093080051795")) {
                    keptRoles.push("Video uploads");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1041750093080051795");
                    await interaction.member.roles.add(role);
                    addedRoles.push("Video uploads");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === "1041750093080051795")) {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1041750093080051795");
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Video uploads")
                }
            }

            if (interaction.values.includes("tech")) {
                if (interaction.member.roles.cache.find(role => role.id === "1043187780186026004")) {
                    keptRoles.push("Tech & programming");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1043187780186026004");
                    await interaction.member.roles.add(role);
                    addedRoles.push("Tech & programming");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === "1043187780186026004")) {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1043187780186026004");
                    await interaction.member.roles.remove(role);
                    removedRoles.push("Tech & programming")
                }
            }

            if (interaction.values.includes("memes")) {
                if (interaction.member.roles.cache.find(role => role.id === "1043188229316292638")) {
                    keptRoles.push("Memes");
                } else {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1043188229316292638");
                    await interaction.member.roles.add(role);
                    addedRoles.push("Memes");
                }
            } else {
                if (interaction.member.roles.cache.some(role => role.id === "1043188229316292638")) {
                    let role = interaction.guild.roles.cache.find(role => role.id === "1043188229316292638");
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