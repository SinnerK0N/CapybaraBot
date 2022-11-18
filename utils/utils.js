const fetch = require("node-fetch");

module.exports = {
    //https://stackoverflow.com/a/51974024/16318032
    retrieveResponseStatus: async function(url)
    {
        try
        {
            const response = await fetch(url);
            const {status} = response;
            return status;
        } catch (err) {
            console.error(err);
        }
    },

    sleep: function(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        }
        while (currentDate - date < milliseconds);
    },

    convertBytes: function(bytes) {
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

        if (bytes == 0) {
            return "n/a";
        }

        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

        if (i == 0) {
            return bytes + " " + sizes[i];
        }

        return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
    },

    btdApiFixInput: function(input) {
        input = input.replace(/\s+/g, "-");
        return input.toLowerCase();
    },

    undefinedToUndefined: function(variable) {
        if (variable == undefined)
            return "Not set";
        return ""
    }
}
