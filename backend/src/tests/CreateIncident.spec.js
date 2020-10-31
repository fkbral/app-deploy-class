const CreateIncidentsService = require('../services/CreateIncidentService');
const CreateNgoService = require('../services/CreateNgoService');
const FakeCreateIdService = require('../services/fakes/FakeCreateIdService');
const FakeNgoRepository = require('../repositories/fakes/FakeNgoRepository');
const FakeIncidentRepository = require('../repositories/fakes/FakeIncidentRepository');

describe('CreateIncidents' , () => {

  it('should be able to create a new incident', async () => {

    const fakeCreateIdService = new FakeCreateIdService();
    const fakeNgoRepository = new FakeNgoRepository();
    const createNgoService = new CreateNgoService(
      {
        createIdService: fakeCreateIdService,
        ngoRepository: fakeNgoRepository
      }
    );

    const ngoData = {
      name: 'Zé',
      email: 'ze@email.com',
      whatsapp: '1111111111',
      city: 'São Paulo',
      uf: 'SP',
    }

    const ngo = createNgoService.execute(ngoData);

    const fakeIncidentRepository = new FakeIncidentRepository();
    const createIncidentsService = new CreateIncidentsService(
      {
        incidentRepository: fakeIncidentRepository
      }
    );

    const incidentData = {
      ngo_id: ngo.id,
      title: 'Cadelinha precisa de cirurgia',
      description: 'O procedimento será realizado às 14:00',
      value: 200
    }

    const incident = await createIncidentsService.execute(incidentData);

    expect(incident).toHaveProperty('id');
  })
})