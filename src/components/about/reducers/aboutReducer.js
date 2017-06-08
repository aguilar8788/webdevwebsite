import {ABOUT} from '../../../actions/actionTypes.js'

export default function aboutReducer (state = [], action) {
	switch(action.type) {
		case ABOUT: 
			return state
		default: 
			return state
	}
}
