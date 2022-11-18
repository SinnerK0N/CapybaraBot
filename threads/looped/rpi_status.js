const si = require("systeminformation");
const ping = require("ping");
const utilsNet = require("../../utils/network.js");
const utilsGeneral = require("../../utils/utils.js");
const os = require("os");
const {EmbedBuilder} = require("discord.js");

module.exports = {
    Run: async function() {
        const discordBot = require("../discord/core.js");
        
        let temperature;
        let cpu;
        let _ping;
        let down_speed;
        let up_speed;

        si.currentLoad().then(data => {
            cpu = data.currentLoad.toPrecision(3);
        });
        si.cpuTemperature().then(data => {
            temperature = data.main;
        });

        await ping.promise.probe("krypt0n.eu").then(res => {
            _ping = res.time;
        });
        await utilsNet.getNetworkDownloadSpeed().then(speed => {
            down_speed = speed;
        })
        await utilsNet.getNetworkUploadSpeed().then(speed => {
            up_speed = speed;
        })

        const embed = new EmbedBuilder()
            .setTitle("RPI Info")
            .addFields(
                {name: "Temperature", value: temperature + " ⁰C", inline: true},
                {name: "\u200b", value: "\u200b", inline: true},
                {name: "\u200b", value: "\u200b", inline: true},
                {name: "Net down", value: down_speed + " Mbps", inline: true},
                {name: "Net up", value: up_speed + " Mbps", inline: true},
                {name: "Net ping", value: _ping + "ms", inline: true},
                {name: "CPU usage", value: cpu + "%", inline: true},
                {
                    name: "Memory usage",
                    value: utilsGeneral.convertBytes(os.freemem()) + "/" + utilsGeneral.convertBytes(os.totalmem()),
                    inline: true
                },
            )
        await discordBot.Messaging.sendEmbedToChannel("rpi_status", embed);
    }
}