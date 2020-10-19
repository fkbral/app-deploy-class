const crypto = require('crypto');

class NgoController {
  async store(req, res) {

    return res.json({message: 'ok'});
  }

  async index(req, res) {

    return res.json({message: 'ok'});
  }

  async delete(req, res) {

    return res.json(ngos);
  }
}

module.exports = new NgoController();
