const Ngo = require('../models/Ngo');
const CreateNgoService = require('../services/CreateNgoService');
const CreateIdService = require('../services/CreateIdService');
const NgoRepository = require('../repositories/NgoRepository');

class NgoController {
  async store(request, response) {
    
    const { name, email, whatsapp, city, uf } = request.body;

    const createIdService = new CreateIdService();
    const ngoRepository = new NgoRepository();

    const createNgoService = new CreateNgoService({ createIdService, ngoRepository});

    const createdNgo = await createNgoService.execute({name, email, whatsapp, city, uf});

    if(!createdNgo){
      return response.status(400).send('<h1>email já cadastrado</h1>');
    }

    return response.status(201).json(createdNgo);
  }

  async index(request, response) {
    const ngos = await Ngo.findAll();

    return response.json(ngos);
  }

  async delete(request, res) {

  }
}

module.exports = new NgoController();
