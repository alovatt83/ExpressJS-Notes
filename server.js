// Dependencies
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Express Dependencies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static HTML document 
app.use(express.static('./public'));

// Point to routing documents
    require("./routes/apiRoutes.js")(app);
    require("./routes/htmlRoutes.js")(app);

// Begin server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});