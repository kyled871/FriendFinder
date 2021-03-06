const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname + "/app/public"))); 

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
    console.log(`Server listening on http://localhost:${PORT}.`);
});