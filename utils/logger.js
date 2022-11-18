module.exports = {
    info: function(text)
    {
        console.log("🔵️|" + new Date().toLocaleString() + "|" + text);
    },

    warning: function(text)
    {
        console.log("🟡️|" + new Date().toLocaleString() + "|" + text);
    },

    error: function(text)
    {
        console.log("🔴|" + new Date().toLocaleString() + "|" + text);
    }
}