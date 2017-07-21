import {
    LOAD_PORTFOLIO_DATA
} from '../../../actions/actionTypes'

export default function portfolioReducer(state = [], action) {
    switch(action.type) {
        case LOAD_PORTFOLIO_DATA:
            return action.portfolioData
        default:
            return state
    }
}
