const Incident = require('../models/Incident')

class IncidentRepository {

  async createIncident({title, description, value, ngo_id,}){
    const incident = await Incident.create({
      title,
      description,
      value,
      ngo_id,
    });

    return(incident);
  }

  async listIncidents(){
    const incidents = await Incident.findAll()

    return(incidents)
  }
}

module.exports = IncidentRepository;
