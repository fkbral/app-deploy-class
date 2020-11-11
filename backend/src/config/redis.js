require('dotenv').config()

const redisConfig = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: undefined,
}

module.exports = redisConfig