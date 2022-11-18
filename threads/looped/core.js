const youtubeNotifier = require("./youtube.js")
const status = require("./status.js");
const rpiStatus = require("./rpi_status.js");

//goofy way but it does the work now
let bWasHour = false;
let minutes = 0;

module.exports = {
    Run: async function() {
        setTimeout(async function() {
            await youtubeNotifier.Run();
            await rpiStatus.Run();
            await status.Run();
        }, 10000);

        setInterval(async () => {
            minutes++;

            if (minutes == 4) //1 hour
            {
                minutes = 0;
                await youtubeNotifier.Run();
                await rpiStatus.Run();
            }
            else if (minutes == 2) //30 minutes
                await youtubeNotifier.Run();

            await status.Run();
        }, 900000);
    }
}