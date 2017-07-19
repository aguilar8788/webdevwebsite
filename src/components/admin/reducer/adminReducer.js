import {
    UPDATE_CONTACT_LIST,
    LOAD_CONTACTS
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
