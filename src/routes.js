import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import About from './components/about/component/About'
import Blog from './components/blog/component/blog.js'
import Contact from './components/contact/component/contact.js'
import Work from './components/work/component/work.js'
import Admin from './components/admin/component/admin.js'
export default (
	<Route path="/" component={App}>
		<IndexRoute component={About} />
		<Route path="/blog" component={Blog} />
		<Route path="/contact" component={Contact} />
		<Route path="/work" component={Work} />
		<Route path="/admin" component={Admin} />
	</Route>
)
