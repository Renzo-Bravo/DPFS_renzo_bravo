const fs = require("fs");
const path = require("path");

const brandPath = path.join(__dirname, "../", "data", "brand.json");
const db = require("../database/models/index")

const indexCtrl = {
  index: function (req, res, next) {
    const brands = JSON.parse(fs.readFileSync(brandPath, "utf-8"));
    res.render("index", { brands });
  },
};

module.exports = indexCtrl;
