import {combineReducers} from 'redux'
import aboutReducer from '../components/about/reducers/aboutReducer'
import formReducer from '../components/common/form/reducer/formReducer'
import adminReducer from '../components/admin/reducer/adminReducer'
import blogReducer from '../components/admin/reducer/blogInfoReducer'
import portfolioReducer from '../components/admin/reducer/portfolioReducer'
const rootReducer = combineReducers({
	aboutReducer,
	formReducer,
	adminReducer,
	blogReducer,
	portfolioReducer
})

export default rootReducer
