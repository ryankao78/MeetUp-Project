import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Event from './Event/Event';

import useStyles from './styles';

const Events = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);
    
    return (
        // ! = if not
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Event post={post} setCurrentId={setCurrentId}/>
                    </Grid>    
                ))}
            </Grid>
        )    
    );
}

export default Events;