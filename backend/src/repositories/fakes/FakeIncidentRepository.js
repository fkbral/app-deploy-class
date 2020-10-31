class FakeIncidentRepository {

  incidents = []

  async createIncident({title, description, value, ngo_id,}){
    const incident = {
      title,
      description,
      value,
      ngo_id,
      id: 1,
    };

    this.incidents.push(incident);

    return(incident);
  }
}

module.exports = FakeIncidentRepository;
