const { name } = require("ejs");
const fs = require("fs");
const path = require("path");

const categoryPath = path.join(__dirname, "../", "data", "category.json");
const colorPath = path.join(__dirname, "../", "data", "colors.json");

const adminCtrl = {
  utils: (req, res) => {
    res.render("admin/utils");
  },

  createCategory: (req, res) => {
    const category = JSON.parse(fs.readFileSync(categoryPath, "utf-8"));
    const newCategory = {
      id: category.length > 0 ? category[category.length - 1].id + 1 : 1,
      typeBike: req.body.typeBike,
    };

    category.push(newCategory);
    const categoryJSON = JSON.stringify(category, null, " ");
    fs.writeFileSync(categoryPath, categoryJSON);
    res.redirect("/");
  },

  createColor: (req, res) => {
    const colors = JSON.parse(fs.readFileSync(colorPath, "utf-8"));
    const newColor = {
      id: colors.length > 0 ? colors[colors.length - 1].id + 1 : 1,
      color: req.body.color,
    };
    colors.push(newColor);
    const colorsJSON = JSON.stringify(colors, null, " ");
    fs.writeFileSync(colorPath, colorsJSON);
    res.redirect("/");
  },
};

module.exports = adminCtrl;
