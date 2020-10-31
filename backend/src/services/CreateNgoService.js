class CreateNgoService {

  createIdService
  ngoRepository

  constructor({ createIdService, ngoRepository }){
    this.createIdService = createIdService;
    this.ngoRepository= ngoRepository;
  }

  async execute({ name, email, whatsapp, city, uf }){

    const id = this.createIdService.execute();

    const ngoExists = await this.ngoRepository.findUserByEmail(email);

    if (ngoExists) {
      throw new Error();
    }

    const ngo = await this.ngoRepository.createNgo({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return ngo;
  }
}

module.exports = CreateNgoService;