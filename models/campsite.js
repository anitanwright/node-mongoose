const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//instance of a new Schema called campsiteScheme with 2 args 
const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
// Campsite model with campsiteSchema
const Campsite = mongoose.model('Campsite', campsiteSchema);
//exporting the campsite model
module.exports = Campsite;