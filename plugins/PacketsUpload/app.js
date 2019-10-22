const http = require('http');
const fs = require('fs');
const dateFormat = require('dateformat');

const compressing = require('compressing');

const dir = "HttpCanary";

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

http.createServer(function (req, res) {
    console.log("header: " + req.headers['hello']);
    var zip = dir + "/" + dateFormat(new Date(), "yyyymmdd_hMMss") + ".zip";
    var stream = req.pipe(fs.createWriteStream(zip));
    stream.on("finish", function(response) {
        compressing.zip.uncompress(zip, zip.slice(0, -4))
            .then(() => {
                fs.unlinkSync(zip);
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end("{\"message\":\"Upload success!\"}");
            })
            .catch(err => {
                fs.unlinkSync(zip);
                res.writeHead(500, {'Content-Type': 'application/json'});
                res.end("{\"message\":\"Server internal error!\"}");
            });
    });
}).listen(9090);