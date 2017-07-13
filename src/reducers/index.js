import {combineReducers} from 'redux'
import aboutReducer from '../components/about/reducers/aboutReducer'
import formReducer from '../components/common/form/reducer/formReducer'

const rootReducer = combineReducers({
	aboutReducer,
	formReducer
})

export default rootReducer
