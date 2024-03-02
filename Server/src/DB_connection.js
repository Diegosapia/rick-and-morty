require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,DB_URL } = process.env;

const Favoritemodel = require("./models/Favorite");
const Usermodel = require("./models/User");

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(`${DB_URL}`, {
  logging: false,
  native: false,
  dialect: "postgres", // Específico del dialecto PostgreSQL
  dialectOptions: {
    ssl: false, 
  }
});


Favoritemodel(sequelize);
Usermodel(sequelize);

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
