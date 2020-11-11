require('dotenv').config()

module.exports = {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  username: 'postgres',
  port: 5432,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
