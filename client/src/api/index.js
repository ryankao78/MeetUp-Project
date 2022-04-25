import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const retrieveEvents = () => axios.get(url);

export const createEvent = (newEvent) => axios.post(url, newEvent);

export const updateEvent = (id, updated_Event) => axios.patch(`${url}/${id}`, updated_Event); // updated_Event = event data

export const deleteEvent = (id) => axios.delete(`${url}/${id}`);

export const joinEvent = (id) => axios.patch(`${url}/${id}/joinEvent`); // what does this path mean?

export const rejectEvent = (id) => axios.patch(`${url}/${id}/rejectEvent`); 