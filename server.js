var compression = require('compression');
var connect = require('connect');
var serveStatic = require('serve-static');
const PORT = process.env.PORT || 5000
console.log('\n\n--- Node Version: ' + process.version + ' ---');

// Set up Connect routing
var app = connect()
app.use(compression({
    filter: shouldCompress
}))
app.use(serveStatic("."));
app.listen(PORT);


function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
    }
    // fallback to standard filter function
    return compression.filter(req, res)
}