import {combineReducers} from 'redux'
import aboutReducer from '../components/about/reducers/aboutReducer'
import formReducer from '../components/common/form/reducer/formReducer'
import adminReducer from '../components/admin/reducer/adminReducer'

const rootReducer = combineReducers({
	aboutReducer,
	formReducer,
	adminReducer
})

export default rootReducer
