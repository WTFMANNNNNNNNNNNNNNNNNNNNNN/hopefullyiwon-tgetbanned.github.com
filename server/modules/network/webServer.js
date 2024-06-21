let fs = require('fs'),
    path = require('path'),
    publicRoot = path.join(__dirname, "../../../public"),
    normalRoot = path.join(__dirname, "../../.."),
    mimeSet = {
        "js": "application/javascript",
        "json": "application/json",
        "css": "text/css",
        "html": "text/html",
        "md": "text/markdown",
        "png": "image/png",
        "ico": "image/x-icon"
    },
    // If someone tries to get a file that does not exist, send them this instead.
    DEFAULT_FILE = 'index.html',
    server,
    wsServer = new (require('ws').WebSocketServer)({ noServer: true });

if (Config.host === 'localhost') {
    util.warn(`config.host is just "localhost", are you sure you don't mean "localhost:${Config.port}"?`);
}
if (Config.host.match(/localhost:(\d)/) && Config.host !== 'localhost:' + Config.port) {
    util.warn('config.host is a localhost domain but its port is different to config.port!');
}

server = require('http').createServer((req, res) => {
    let resStr = "";

    switch (req.url) {
        case "/lib/json/mockups.json":
            resStr = mockupJsonData;
            break;
        case "/serverData.json":
            resStr = JSON.stringify({
                ip: Config.host,
                gameMode: Config.gameModeName,
                players: views.length,
                region: Config.region,
                name: Config.serverName,
            });
            break;
        default:
            if (Config.COMBINED) {
                let fileToGet = path.join(publicRoot, req.url);

                if (!fs.existsSync(fileToGet)) {
                  if (req.url.includes("/file/")) {
                    fileToGet = path.join(normalRoot, req.url.replace("/file", ""));
                } else {
                    fileToGet = path.join(publicRoot, DEFAULT_FILE);
                }
                } else if (!fs.lstatSync(fileToGet).isFile()) {
                    fileToGet = path.join(publicRoot, DEFAULT_FILE);
                }

                //return the file
                res.writeHead(200, { 'Content-Type': mimeSet[ fileToGet.split('.').pop() ] || 'text/html' });
                return fs.createReadStream(fileToGet).pipe(res);
            }
    }

    // CORS?
        res.setHeader('Access-Control-Allow-Origin', '*');

    res.writeHead(200);
    res.end(resStr);
});

server.on('upgrade', (req, socket, head) => wsServer.handleUpgrade(req, socket, head, ws => sockets.connect(ws, req)));
server.listen(Config.port, () => console.log("Server listening on port", Config.port));

module.exports = { server };