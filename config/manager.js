//soonTM
const fs = require("fs");
const logger = require("../utils/logger.js");

module.exports = {
    getConfig: async function(name)
    {
        let cfg_data;
        await fs.readFile(__dirname + "/data/" + name + ".json", async function(err, data){
            if (err)
                logger.error(err);
            else
            {
                cfg_data = JSON.parse(data);
            }
        })

        return new Promise((resolve, reject) => {
            setTimeout(() => { //bad.
                resolve(cfg_data);
            }, 3000);
        });
    },

    writeConfig: async function(name, data)
    {
        await fs.writeFileSync(__dirname + "/data/" + name + ".json", JSON.stringify(data));
    }
}