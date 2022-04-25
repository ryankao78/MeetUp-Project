import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { retrieveEvents } from '../../actions/events';

import Events from '../Events/Events';
import Form from '../Form/Form';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveEvents());
    }, [currentId, dispatch]); // if [currentId, dispatch] changes, then useEffect will be invoked

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Events setCurrentId={setCurrentId}/> {/* component */}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/> {/* component */}
                    </Grid>
                </Grid>
            </Container>
    </Grow>
    )
};

export default Home;