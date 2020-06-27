const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
    console.log(`Server listening on http://localhost:${PORT}.`);
});



