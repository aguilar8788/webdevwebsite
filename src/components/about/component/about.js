import React, {Component} from 'react'

class About extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <div className="aboutContainer container-fluid">
                    <div className="aboutPete">
                        <img className="paguilarImage" src={require('../../../images/paguilar.png')} />
                        <p>
                            I am a developer who loves challenges and making cool things.
                            Originally from Michigan, but currently reside in Southwest Florida enjoying the salt life.
                            I began my development career working for a communications company on a dev team that was
                            responsible for building internal tools. Now I spend my days as a freelance developer creating
                            for my awesome clients.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About