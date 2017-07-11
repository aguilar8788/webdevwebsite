import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class Work extends Component {
    constructor(props, context) {
        super(props, context)

        this.renderWorkImages = this.renderWorkImages.bind(this)
    }

    componentWillMount() {
        axios.get('http://localhost:8080/portfolio')
            .then(res => {
                if (res) {
                    this.setState({"work" : res.data})
                }
            })
    }

    renderWorkImages(workUrlsArray) {
        return workUrlsArray.map((url, index) => {
            return (
				<div key={index} className="workContent">
					<a href={url.metaData.siteUrl} target="_blank"><img className="image" src={`http://localhost:8080/files/${url.fileName}`} width="350" height="190" /></a>
				</div>
            )
        })

    }

    render() {
        return (
			<div>
				<div className="workContainer container-fluid">
					<h1>what we do</h1>
					<div className="work">
						<div className="workContent">
                            {this.state ? this.renderWorkImages(this.state.work) : ""}
						</div>
					</div>
				</div>
			</div>
        )
    }
}

Work.propTypes = {

}

Work.contextTypes = {
    router: PropTypes.object
}

export default Work
