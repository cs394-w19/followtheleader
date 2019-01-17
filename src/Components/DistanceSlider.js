import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
            <Container>
                <Slider type="range" min={0} max={this._maxDistance} value={this.state.currentDistance} onChange={this.handleSlider} />
                <Radius>Radius: {this.state.currentDistance} Miles</Radius>
            </Container>
        )
    }
}

const Container = styled.div`
    grid-column: 2;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
`

const Slider = styled.input`
    width: 100%;
`

const Radius = styled.p`
    margin: 0;
`
