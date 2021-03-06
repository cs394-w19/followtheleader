import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/// The component that lets the user select the distance for places to see.
/// Pass a prop called handleDistanceChanged as a function to handle the new distance selected.
export default class DistanceSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // selectedValue is the raw value of the HTML `input` element.
      // The current distance is computed from this divided by props.numberOfIncrements.
      selectedValue: props.numberOfIncrements / 2
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
      selectedValue: newValue
    }, this.handleSubmit)
  }

  handleSubmit = () => {
    const newDistance = this.currentDistance()
    this.props.handleDistanceChanged(newDistance)
  }

  /// Computes the current distance being represented.
  currentDistance = () => {
    return this.state.selectedValue / this.props.numberOfIncrements * this.props.maxDistance
  }

  render() {
    return (
      <Container>
        <Slider type="range" min={0} max={this.props.numberOfIncrements} value={this.state.selectedValue} onChange={this.handleSlider} />
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  text-align: center;
  z-index: 5;
`

const Slider = styled.input`
  width: calc(100% * 2/3);
`

const Button = styled.button`
  font-size: 1em;
  color: white;
  background-color: #75b;
  border: none;
  border-radius: 0.5em;
  padding: 0.3em;
  font-weight: bold;
  cursor: pointer;
`
