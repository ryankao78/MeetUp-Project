import { FETCH_ALL, CREATE, UPDATE, DELETE, JOIN } from '../constants/actionTypes'; 
import * as api from '../api';

// Action Creators
export const retrieveEvents = () => async (dispatch) => {
    try {
        const { data } = await api.retrieveEvents();

        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error);
    }
    
    // const action = {type: 'FETCH_ALL', payload: []}

    // dispatch(action);
}

export const createEvent = (event) => async (dispatch) => {
    try {
        const { data } = await api.createEvent(event);

        dispatch({type: CREATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updateEvent = (id, event) => async (dispatch) => {
    try {
        const { data } = await api.updateEvent(id, event);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteEvent = (id) => async (dispatch) => {
    try {
        await api.deleteEvent(id);

        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const joinEvent = (id) => async (dispatch) => {
    try {
        const { data } = await api.joinEvent(id);

        dispatch({ type: JOIN, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const rejectEvent = (id) => async (dispatch) => {
    try {
        const { data } = await api.rejectEvent(id);

        dispatch({ type: JOIN, payload: data });
    } catch (error) {
        console.log(error);
    }
}