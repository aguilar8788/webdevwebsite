import {
    LOAD_BLOG_DATA,
    UPDATE_BLOG_DATA
} from '../../../actions/actionTypes'

export default function (state = [], action) {
    switch(action.type) {
        case LOAD_BLOG_DATA:
            return action.blogData
        case UPDATE_BLOG_DATA:
            return action.blogData
        default:
            return state
    }
}
