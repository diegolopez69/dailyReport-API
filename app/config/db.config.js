module.exports = {
  HOST: "127.0.0.1",
  USER: "report_root",
  PASSWORD: "Uneatlantico22",
  DB: "db_daily_report",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
