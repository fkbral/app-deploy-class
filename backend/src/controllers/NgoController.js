const Ngo = require('../models/Ngo');
const CreateNgoService = require('../services/CreateNgoService');
const CreateIdService = require('../services/CreateIdService');
const NgoRepository = require('../repositories/NgoRepository');

const RedisCache = require('../redis/RedisCache')

class NgoController {
  async store(request, response) {
    const redisCache = new RedisCache()
    
    const { name, email, whatsapp, city, uf } = request.body;

    const createIdService = new CreateIdService();
    const ngoRepository = new NgoRepository();

    const createNgoService = new CreateNgoService({ createIdService, ngoRepository});

    await redisCache.invalidate('ngos');

    const createdNgo = await createNgoService.execute({name, email, whatsapp, city, uf});



    if(!createdNgo){
      return response.status(400).send('<h1>email já cadastrado</h1>');
    }

    return response.status(201).json(createdNgo);
  }

  async index(request, response) {
    let cached = true

    const redisCache = new RedisCache()

    const ngosCache = await redisCache.recover('ngos')

    let ngos = ngosCache

    if(!ngosCache){

      ngos = await Ngo.findAll();
      await redisCache.save('ngos', ngos);
      cached = false
    }

    return response.json({ngos, cached});
  }

  async delete(request, res) {

  }
}

module.exports = new NgoController();
