const IncidentRepository = require('../repositories/IncidentRepository');
const CreateIncidentService = require('../services/CreateIncidentService');

const Incident = require('../models/Incident')

class IncidentController {

  async index(req, res) {
    const incidentRepository = new IncidentRepository();

    const incidents = await incidentRepository.listIncidents()

    return res.json(incidents)
  }

  async store(req, res) {
    const ngo_id = req.headers.authorization;
    const { title, description, value } = req.body;
    
    const incidentRepository = new IncidentRepository();

    const createIncidentService = new CreateIncidentService({incidentRepository})

    const incident = await createIncidentService.execute({ ngo_id, title, description, value })

    return res.json(incident);
  }

  async delete(req, res) {
    const ngo_id = req.headers.authorization;
    const { id } = req.params;

    const incident = await Incident.findOne({ where: { id }, attributes: ['ngo_id']});

    if(!incident){
      return res.status(401).json({ error: 'Incident does not exist' });
    }

    if (incident.ngo_id !== ngo_id) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    await Incident.destroy({ where: { id }});

    return res.status(204).send();
  }
}

module.exports = new IncidentController();
