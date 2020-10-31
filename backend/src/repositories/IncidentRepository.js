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
}

module.exports = IncidentRepository;
