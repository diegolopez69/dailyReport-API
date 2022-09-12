module.exports = {
  HOST: "localhost", //This could be localhost too
  USER: "report_root",
  PASSWORD: "Uneatlantico22",
  DB: "db_daily_report",
  PORT: "3306",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
