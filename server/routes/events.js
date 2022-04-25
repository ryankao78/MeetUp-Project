import express from 'express';

import { retrieveEvents, createEvent, updateEvent, deleteEvent, joinEvent, rejectEvent } from '../controllers/events.js';

const router = express.Router();

// http://localhost:5000/posts

router.get('/', retrieveEvents);
router.post('/', createEvent);
router.patch('/:id', updateEvent); // for updates, we need to know id
router.delete('/:id', deleteEvent);
router.patch('/:id/joinEvent', joinEvent);
router.patch('/:id/rejectEvent', rejectEvent);

export default router;