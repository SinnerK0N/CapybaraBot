const rss = require("rss-converter");
const fs = require("fs");
const configManager = require("../../config/manager.js");
const logger = require("../../utils/logger.js");

module.exports = {
    Run: async function() {
        const discordBot = require("../discord/core.js");

        configManager.getConfig("main").then(cfg => {
            let config = cfg;

            config.youtube.forEach(async channel => {
                try
                {
                    let rss_feed = await rss.toJson("https://www.youtube.com/feeds/videos.xml?channel_id=" + channel.youtube_id);
                    let json = channel.videos;
                    let posted_vids = JSON.stringify(json);
                    if (!posted_vids.includes(rss_feed.items[0].yt_videoId))
                    {
                        json.push(rss_feed.items[0].yt_videoId);
                        let json_link = JSON.stringify(json);
                        channel.videos = json;
                        await configManager.writeConfig("main", config);

                        let composedMsg = "<@&" + config.roles.server.uploads + "> <@" + channel.discord_id + "> posted a new video:\n" + rss_feed.items[0].link;
                        await discordBot.Messaging.sendMsgToChannel("videos", composedMsg);
                    }
                }
                catch(e)
                {
                    logger.error("Failed to parse YouTube data for: " + channel.youtube_id);
                }
            });
        });
    }
}