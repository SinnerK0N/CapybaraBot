const discordBot = require("../threads/discord/core.js")

let videos, announcements, rpi_status, members, verification;
const configManager = require("../config/manager.js");
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

module.exports = {

}