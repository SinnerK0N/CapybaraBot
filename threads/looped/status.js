const {ActivityType} = require("discord.js");

let server, presence;
const configManager = require("../../config/manager.js");
configManager.getConfig("main").then(cfg => {
    server = cfg.server_id;
    presence = cfg.presence;
});

function getRandomUser()
{
    const discordBot = require("../discord/core.js");
    return discordBot.getBot().guilds.cache.get(server).members.cache.random().displayName;
}
function getActivityType(type)
{
    switch(type.toLowerCase())
    {
        case "watching":
            return ActivityType.Watching;
        case "playing":
            return ActivityType.Playing;
        case "listening":
            return ActivityType.Listening;
        default:
            return type;
    }
}

const logger = require("../../utils/logger.js");

module.exports = {
    Run: function()
    {
        let pname = presence.name.toString();
        if (pname.includes("%rand_user%"))
            pname = pname.replace("%rand_user%", getRandomUser());

        const discordBot = require("../discord/core.js");
        discordBot.getBot().user.setPresence({ activities: [{ name: pname, type: getActivityType(presence.type) }], status: presence.status});
    }
}