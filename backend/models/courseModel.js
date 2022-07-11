const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title: {
        type: String
    },
    tag: {
        type: String
    },
    image: {
        type: String
    },
    shortDescription: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    lessons: [
        {
            title: {
                type: String
            },
            video: {
                type: String
            }
        }
    ]
}, {
    timestamps: true,
});

module.exports = Course = mongoose.model('Course', courseSchema);