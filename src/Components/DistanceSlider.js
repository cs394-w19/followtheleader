import React, { Component } from 'react'
import PropTypes from 'prop-types'

/// The component that lets the user select the distance for places to see.
/// Pass a prop called handleDistanceChanged as a function to handle the new distance selected.
export default class DistanceSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDistance: this._maxDistance / 2
        }
    }

    propTypes: {
        handleDistanceChanged: PropTypes.func.isRequired
    }

    _maxDistance = 10

    handleSlider = event => {
        const newDistance = event.target.value
        this.setState({
            currentDistance: newDistance
        })
        this.props.handleDistanceChanged(newDistance)
    }

    render() {
        return (
            <input type="range" min={0} max={this._maxDistance} value={this.state.currentDistance} onChange={this.handleSlider} />
        )
    }
}
