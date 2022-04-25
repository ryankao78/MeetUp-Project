import mongoose from 'mongoose';
import EventContent from '../models/EventContent.js'; // EventContent is the data model

export const retrieveEvents = async (req, res) => {
    try {
        const event_Contents = await EventContent.find();

        console.log(event_Contents);

        res.status(200).json(event_Contents);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createEvent = async(req, res) => {
    const event = req.body;

    const newEvent = new EventContent(event);

    try {
        await newEvent.save();

        res.status(201).json(newEvent);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

export const updateEvent = async (req, res) => {
    const { id: _id } = req.params;
    const event = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No event with id: ${id}`);

    const updated_Event = await EventContent.findByIdAndUpdate(_id, { ...event, _id }, { new: true });

    res.json(updated_Event);
}

export const deleteEvent = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No event with id: ${id}`);

    await EventContent.findByIdAndRemove(_id);

    res.json({ message: 'Event deleted successfully!' });
}

export const joinEvent = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No event with id: ${id}`);

    const event = await EventContent.findById(_id);
    const updated_Event = await EventContent.findByIdAndUpdate(_id, { joinCount: event.joinCount + 1}, {new: true});

    res.json(updated_Event);
}

export const rejectEvent = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No event with id: ${id}`);

    const event = await EventContent.findById(_id);
    const updated_Event = await EventContent.findByIdAndUpdate(_id, { rejectCount: event.rejectCount + 1}, {new: true});

    res.json(updated_Event);
}