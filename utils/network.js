const NetworkSpeed = require('network-speed');
const testNetworkSpeed = new NetworkSpeed();

module.exports = {
    getNetworkDownloadSpeed: async function()
    {
        const baseUrl = "https://eu.httpbin.org/stream-bytes/1500000";
        const fileSizeInBytes = 1500000;
        const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
        return speed.mbps;
    },

    getNetworkUploadSpeed: async function()
    {
        const options = {
            hostname: "krypt0n.eu",
            port: 80,
            path: 'REMOVED FOR SECURITY REASONS',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const fileSizeInBytes = 2000000
        const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
        return speed.mbps;
    }
}
