var connect = require('connect'),
    serveStatic = require('serve-static');

console.log('\n\n--- Node Version: ' + process.version + ' ---');

// Set up Connect routing
var app = connect()

app.use(serveStatic("../coding-club-website"));

// Start node server listening on specified port -----
app.listen(80);
