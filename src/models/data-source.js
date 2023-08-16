const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const dataInitialize = async (res, req, next) => {
  await AppDataSource.initialize();
  try {
    console.log("database has been initialized");
    next();
  } catch (err) {
    console.log(err);
  }
};
module.exports = { AppDataSource, dataInitialize };
