class CreateIncidentService{
  incidentRepository;

  constructor({ incidentRepository }){
    this.incidentRepository = incidentRepository;
  }

  async execute({title,description,value,ngo_id}){
    const incident = await this.incidentRepository.createIncident({
      title,
      description,
      value,
      ngo_id,
    });

    return incident;
  }
}

module.exports = CreateIncidentService;