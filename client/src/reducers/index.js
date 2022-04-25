import { combineReducers } from 'redux';

import posts from './events';

export default combineReducers({
    posts,
    // it should be "posts: posts", but since both the key and value are the same, we can keep only one
});

