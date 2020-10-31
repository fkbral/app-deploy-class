class FakeNgoRepository {
  ngos = [];

  async findUserByName(name){
    const findNgo = this.ngos.find(ngo => ngo.name === name);

    return(findNgo);
  }

  async findUserByEmail(email){
    const findNgo = this.ngos.find(ngo => ngo.email === email);

    return(findNgo);
  }

  async createNgo({id, name, email, whatsapp, city, uf}){
    const ngo = {id, name, email, whatsapp, city, uf};
    this.ngos.push(ngo);

    return(ngo);
  }
}

module.exports = FakeNgoRepository;