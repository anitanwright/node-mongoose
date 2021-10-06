const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// used for docs storing comments 
const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: { //property
        type: String,
        required: true
    },
    author: { //property
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentSchema] //subschema inside campsiteSchema
}, {
    timestamps: true
});
// Campsite model with campsiteSchema
const Campsite = mongoose.model('Campsite', campsiteSchema);
//exporting the campsite model
module.exports = Campsite;