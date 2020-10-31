const Ngo = require('../models/Ngo')

class NgoRepository {

  async findUserByName(name){
    const findNgo = await Ngo.findOne({where: { name }});

    return(findNgo);
  }

  async findUserByEmail(email){
    const findNgo = await Ngo.findOne({where: { email }});

    return(findNgo);
  }

  async createNgo({id, name, email, whatsapp, city, uf}){
    const ngo = await Ngo.create({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return(ngo);
  }
}

module.exports = NgoRepository;