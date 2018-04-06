import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/home/component/Home'
import Blog from './components/blog/component/blog.js'
import Contact from './components/contact/component/contact.js'
import Work from './components/work/component/work.js'
import About from './components/about/component/about.js'
import Admin from './components/admin/component/admin.js'
export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/blog" component={Blog} />
		<Route path="/contact" component={Contact} />
		<Route path="/work" component={Work} />
		<Route path="/about" component={About} />
		{/*<Route path="/admin" component={Admin} />*/}
	</Route>
)
