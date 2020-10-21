const crypto = require('crypto');
const Ngo = require('../models/Ngo');

class NgoController {
  async store(request, response) {
    const id = crypto.randomBytes(4).toString('HEX');

    const { name, email, whatsapp, city, uf } = request.body;

    const ngoExists = await Ngo.findOne({where: { name }});

    if (ngoExists) {
      return response.status(400).send('<h1>email já cadastrado</h1>');
    }

    const ngo = await Ngo.create({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.status(201).json(ngo);
  }

  async index(request, response) {
    const ngos = await Ngo.findAll();

    return response.json(ngos);
  }

  async delete(request, res) {

  }
}

module.exports = new NgoController();
