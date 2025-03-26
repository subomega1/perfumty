// repositories/PerfumeRepository.js
const Perfume = require('../models/Perfume');

class PerfumeRepository {
    async createPerfume(perfumeData) {
        const perfume = new Perfume(perfumeData);
        perfume.price = perfume.calculatePrice();
        return await perfume.save();
    }
    
    async findById(perfumeId) {
        return await Perfume.findById(perfumeId);
    }

    async findByUser(userId) {
        return await Perfume.find({ userId });
    }
}

module.exports = new PerfumeRepository();