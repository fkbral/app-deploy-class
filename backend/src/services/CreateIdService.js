const crypto = require('crypto');

class CreateIdService {
  execute(){
    return crypto.randomBytes(4).toString('HEX');
  }
}

module.exports = CreateIdService;