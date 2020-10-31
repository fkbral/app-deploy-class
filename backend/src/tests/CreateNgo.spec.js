// require('../database/connection')
const CreateNgoService = require('../services/CreateNgoService');
const FakeCreateIdService = require('../services/fakes/FakeCreateIdService');
const FakeNgoRepository = require('../repositories/fakes/FakeNgoRepository');

describe('CreateNgo', () => {
  it('should be able to create a ngo with name, email, city and state', async () => {

    const fakeCreateIdService = new FakeCreateIdService();
    const fakeNgoRepository = new FakeNgoRepository();

    const createNgoService = new CreateNgoService(
      { ngoRepository: fakeNgoRepository, createIdService:fakeCreateIdService}
    )

    const name = 'John'
    const email = 'johndoe@test.com'
    const whatsapp = '1199870908'
    const city = 'São Paulo'
    const uf = 'SP'

    const ngo = await createNgoService.execute({ name, email, whatsapp, city, uf })

    expect(ngo).toHaveProperty('id');
  })

  it('should not be able to register user with existing email', async () => {

    const fakeCreateIdService = new FakeCreateIdService();
    const fakeNgoRepository = new FakeNgoRepository();

    const createNgoService = new CreateNgoService(
      { ngoRepository: fakeNgoRepository, createIdService:fakeCreateIdService}
    )

    const ngoData = {
      name : 'John',
      email : 'johndoe@test.com',
      whatsapp : '1199870908',
      city : 'São Paulo',
      uf : 'SP',
    }

    const ngo = await createNgoService.execute(ngoData);

    const newNgoData = {
      name : 'Jonas',
      email : 'johndoe@test.com',
      whatsapp : '11990700',
      city : 'Rio de Janeiro',
      uf : 'RJ',
    }

    // const newNgo = await createNgoService.execute(newNgoData);

    expect(ngo).toHaveProperty('id');
    await expect(createNgoService.execute(newNgoData)).rejects.toBeInstanceOf(Error);
  })
})