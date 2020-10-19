class IncidentController {
  async store(req, res) {
    return res.json({ message: 'ok'});
  }

  async delete(req, res) {
    return res.json({ message: 'ok'});
  }
}

module.exports = new IncidentController();
