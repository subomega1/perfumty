// repositories/PerfumeRepository.js
const Perfume = require('../models/Perfume');

class PerfumeRepository {
    async create(perfumeData) {
        return await Perfume.create(perfumeData);
    }
    
    async findByUser(userId) {
        return await Perfume.find({ userId });
    }
}

module.exports = new PerfumeRepository();