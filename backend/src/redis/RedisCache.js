const redisConfig = require('../config/redis')
const Redis = require('ioredis')

class RedisCache {
  client

  constructor(){
    this.client = new Redis(redisConfig)
  }

  async save(key, value){
    await this.client.set(key, JSON.stringify(value))
  }

  async recover(key){
    const data = await this.client.get(key)

    if(!data){
      return null
    }

    return (JSON.parse(data))
  }

  async invalidate(key) {
    await this.client.del(key)
  }
}

module.exports = RedisCache