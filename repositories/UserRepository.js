// repositories/UserRepository.js
const User = require('../models/User');

class UserRepository {
    async create(userData) {
        return await User.create(userData);
    }
    
    async findByEmail(email) {
        return await User.findOne({ email });
    }
}

module.exports = new UserRepository();