require('dotenv').config()

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
