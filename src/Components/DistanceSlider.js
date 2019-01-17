import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/// The component that lets the user select the distance for places to see.
/// Pass a prop called handleDistanceChanged as a function to handle the new distance selected.
export default class DistanceSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // currentValue is the raw value of the HTML `input` element.
      // The current distance is computed from this divided by props.numberOfIncrements.
      currentValue: props.numberOfIncrements / 2
    }
  }

  propTypes: {
    handleDistanceChanged: PropTypes.func.isRequired,
    // number of increments on the HTML `input` element.
    numberOfIncrements: PropTypes.number.isRequired,
    // The maximum distance that this slider can represent.
    maxDistance: PropTypes.number.isRequired
  }

  handleSlider = event => {
    const newValue = event.target.value
    this.setState({
      currentValue: newValue
    }, () => {
      const newDistance = this.currentDistance()
      this.props.handleDistanceChanged(newDistance)
    })
  }

  /// Computes the current distance being represented.
  currentDistance = () => {
    return this.state.currentValue / this.props.numberOfIncrements * this.props.maxDistance
  }

  render() {
    return (
      <Container>
        <Slider type="range" min={0} max={this.props.numberOfIncrements} value={this.state.currentValue} onChange={this.handleSlider} />
        <Radius>Radius: {this.currentDistance()} Miles</Radius>
      </Container>
    )
  }
}

const Container = styled.div`
  // grid-column: 2;
  // position: relative;
  // top: 50%;
  // transform: translateY(-50%);
  // width: 100%;
  text-align: center;
`

const Slider = styled.input`
  width: 90%;
  text-align: center;
`

const Radius = styled.p`
  margin: 0;
`
