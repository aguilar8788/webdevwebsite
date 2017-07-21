import {
    LOAD_BLOG_DATA,
    LOAD_CONTACTS,
    UPDATE_CONTACT_LIST
} from '../../../actions/actionTypes'

export default function adminReducer(state = [], action) {
    switch(action.type) {
        case UPDATE_CONTACT_LIST:
            return action.contacts
        case LOAD_CONTACTS:
            return action.contacts
        default:
            return state
    }
}
