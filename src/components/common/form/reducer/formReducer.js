import {
    FORM_SUBMISSION_FAILED,
    FORM_SUBMISSION_SUCCESS
} from '../../../../actions/actionTypes'

export default function formReducer(state = "", action) {
    switch(action.type) {
        case FORM_SUBMISSION_SUCCESS:
            return action.success
        case FORM_SUBMISSION_FAILED:
            return action.failure
        default:
            return state
    }
}
