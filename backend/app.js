const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");
const userLogged = require("./middlewares/userLogged");
const cors = require("cors");

const adminRouter = require("./routes/admin");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productRouter = require("./routes/products");
const apiProductRouter = require("./routes/api/products");
const adminApiRouter = require("./routes/api/admin");
const apiUserRouter = require("./routes/api/users")


const db = require("./database/models");
db.sequelize.sync();

const app = express();

app.use(cors())
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(logger("dev"));
app.use(cookieParser());
app.use(userLogged);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("assets"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);
app.use("/admin", adminRouter);
app.use("/users", usersRouter);
app.use("/products", productRouter);
app.use("/api/admin", adminApiRouter);
app.use("/api/products", apiProductRouter);
app.use("/api/users", apiUserRouter);

// catch 404
app.use(function (req, res, next) {
  res.status(404).json({
    error: "Ruta no encontrada",
    status: 404,
  });
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    error: err.message,
    status: err.status || 500,
  });
});

module.exports = app;
