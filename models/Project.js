const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title:{ type: String, requiere: true },
    description: String,
    status: { type: String, enum:['active', 'completed'], default:'active' },
    startDate: Date,
    endDate: Date,
    image: String,
}, { timestamps: true });


module.exports = mongoose.model('Project', projectSchema);