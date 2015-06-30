var http = require('http');
// https://github.com/nodejitsu/node-http-proxy
var httpProxy = require('http-proxy');
var url = require('url');

// Create your proxy server and set the target in the options.
var proxy = httpProxy.createServer({});

// http://stackoverflow.com/questions/25896608/nodejs-routing-table-using-http-proxy
var httpServer = http.createServer(function(req, res) {

    var hostname = req.headers.host.split(":")[0];
    var pathname = url.parse(req.url).pathname;

    //console.log(hostname);
    console.log(pathname);

    switch(pathname) {
        case '/app1':
            proxy.web(req, res, { target: 'http://localhost:9001' });
            break;
        case '/app2':
            proxy.web(req, res, { target: 'http://localhost:9002' });
            break;
        default:
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('request successfully proxied!' +
                '\n' + JSON.stringify(req.headers, true, 2));
            res.write('\n' + JSON.stringify(req.url, true, 2));
            res.end();
    }
});

httpServer.listen(9000, function() {
    console.log('http-proxy listening on port 9000');
});
