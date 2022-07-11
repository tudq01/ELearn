const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title: {
        type: String
    },
    tag: {
        type: String
    },
    short_description: {
        type: String
    },
    description: {
        type: String
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