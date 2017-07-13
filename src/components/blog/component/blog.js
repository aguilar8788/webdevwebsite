import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import SlideShow from 'react-image-slideshow';

class Blog extends Component {
    constructor(props, context) {
        super(props, context)

        this.renderImages = this.renderImages.bind(this)

    }

    componentWillMount() {
        axios.get('http://localhost:8080/blog')
            .then(res => {
                if (res) {
                    this.setState({"blogData" : res.data})
                }
            }).catch(errors => {
                console.error("error", errors)
        })

    }

    renderBlogEntry(blogDataArray) {
        return blogDataArray.map((data, index) => {
            return (
                <div key={index} className="blogEntry">
                    <div className="imagesContainer">
                        {this.renderImages(data.imageName)}
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            )
        })
    }

    handleSlideshowOpen(index)
    {
        this.refs.SlideShow.handleModalOpen(index);
    }

    renderImages(imageArray) {
        return imageArray.map( (image, index) => {
            return(
                <div key={index} >
                    <img className="image" src={`http://localhost:8080/files/${image}`} />
                </div>
            )
        })
    }

    render() {


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
