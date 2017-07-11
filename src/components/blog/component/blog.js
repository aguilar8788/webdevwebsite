import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class Blog extends Component {
    constructor(props, context) {
        super(props, context)
    }

    componentWillMount() {
        axios.get('http://localhost:8080/blog')
            .then(res => {
                if (res) {
                    console.log("res", res)
                    this.setState({"blogData" : res.data})
                }
            })
    }

    renderBlogEntry(blogDataArray) {
        return blogDataArray.map(data => {
            console.log("data", data.imageName)
           return (
               <div className="blogEntry">
                   <img className="image" src={`http://localhost:8080/files/${data.imageName[0]}`} />
                  <h2>{data.title}</h2>
                   <p>{data.description}</p>
               </div>
           )
        })
    }

    render() {
        console.log("state", this.state)
        return (
			<div>
				<div className="blogContainer container-fluid">
                    {this.state ? this.renderBlogEntry(this.state.blogData) : ""}
				</div>
			</div>
        )
    }
}

Blog.proptypes = {

}

Blog.contextTypes = {
    router: PropTypes.object
}

export default Blog
