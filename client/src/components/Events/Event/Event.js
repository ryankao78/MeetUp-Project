import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, TextField } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deleteEvent, joinEvent, rejectEvent } from '../../../actions/events';

import Comments from '../../Comments/Comments';
import SendIcon from '@material-ui/icons/Send';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                {/* <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag}`)}</Typography> */}
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(joinEvent(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    Join &nbsp;
                    {post.joinCount}
                </Button>
                <Button size="small" color="secondary" onClick={() => dispatch(rejectEvent(post._id))}>
                    <ThumbDownAltIcon fontSize="small" />
                     Reject &nbsp;
                    {post.rejectCount}
                </Button>
                <Button size="small" color="success" onClick={() => dispatch(deleteEvent(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        <div>
            <Comments />
        </div>
        <form className="post__form">
            <TextField
                label="add comment"
                size="small"
                variant="outlined"
                className="post__input"
                placeholder="add comment"
                />
            <Button variant="contained" size="small" endIcon={<SendIcon />} >
                Send
            </Button>
        </form>
        </Card>
    )
}

export default Post;