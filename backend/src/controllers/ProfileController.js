class ProfileController {
  async index(req, res) {

    return res.json({message: 'ok'});
  }
}

module.exports = new ProfileController();
