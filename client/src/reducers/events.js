import { FETCH_ALL, CREATE, UPDATE, DELETE, JOIN } from '../constants/actionTypes';

export default (events = [], action) => {
    switch (action.type) {
        case DELETE:
            return events.filter((event) => event._id !== action.payload);

        case UPDATE:
        case JOIN: // both case statements do the same thing
            return events.map((event) => event._id === action.payload._id ? action.payload : event);

        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [...events, action.payload];

        default: 
            return events;
    }
}

