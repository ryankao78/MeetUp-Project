import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    eventTitle: String,
    eventContent: String,
    eventCreator: String,
    tags: [String], // array of Strings
    selectedFile: String,
    joinCount: {
        type: Number,
        default: 0
    },
    rejectCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const EventContent = mongoose.model('postMessaages', eventSchema); // the string 'postMessaages' will become a table named 'postmessaages' in MongoDB

export default EventContent;
