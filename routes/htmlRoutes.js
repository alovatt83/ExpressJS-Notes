// Dependencies
const express = require("express");
let path = require("path");
// Export to server.js
module.exports = function (app) {
// Path to HTML documents
    app.use(express.static(path.join(__dirname, "../public")));

    app.get("/notes", function (req, res) {
// Path to notes.html
        res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
// Path to default index.html location
    app.get("/", function (req, res) {

        res.sendFile(path.join(__dirname, "../public/index.html"));
  });
// Express router
    app.get("*", function (req, res) {

        res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};