const mongoose = require('mongoose');

const r16Schema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        docType: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        text: {    
            courseId: {
                type: String,
                required: true
            },
            courseTitle: {
                type: String,
                required: true
            },
            group: {
                type: String,
                required: true
            },
            because: {
                type: String,
                required: true
            },
            registeredPersonQuantity: {
                type: String,
                required: true
            },
            addPersonQuantity: {
                type: String,
                required: true
            },
            person: [{
                type: mongoose.Schema.ObjectId,
                ref: "User"
            }]
        },
        date: {
            type: String,
            required: true
        },
        advisorComment: {
            comment:{
                type: String
            },
            date: {
                type: String,
                required: true
            }
        },
        professorComment: {
            approve: {
                type: Boolean,
                default: true,
                required: true
            },
            because: {
                type: String
            },
            date: {
                type: String,
                required: true
            }
        },
        registerOffice: {
            request: {
                type: Boolean,
                default: true
            },
            because: {
                type: String
            },
            date: {
                type: String,
                required: true
            }
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Documents', r16Schema)