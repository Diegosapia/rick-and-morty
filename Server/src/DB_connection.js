require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,DB_URL } = process.env;

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.
const Favoritemodel = require("./models/Favorite");
const Usermodel = require("./models/User");

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize("postgres://rick_and_morty_29mz_user:QO6AsvNxAwetnplPJOfuCRgBQeJKMxUW@dpg-cjb85i2nip6c73df2obg-a.oregon-postgres.render.com/rick_and_morty_29mz", {
  logging: false,
  native: false,
  dialect: "postgres", // Específico del dialecto PostgreSQL
  dialectOptions: {
    ssl: {
      require: true, // Requerir SSL/TLS
      rejectUnauthorized: false // Opcionalmente, podrías configurar el rechazo de certificados no autorizados
    }
  }
});

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//
Favoritemodel(sequelize);
Usermodel(sequelize);
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
