import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div ok={this.props.text} className="">
                {this.props.text}
            </div>
        )
    }
}

Child.propTypes = {
    text: PropTypes.string.isRequired
}

export default Child;
