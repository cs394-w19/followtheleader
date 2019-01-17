import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import data from '../location.json';

class NewPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      location: {}
    }
  }

  componentWillMount = () => {
    this.setState({ location: data.location.filter(location => location.id == this.props.match.params.id)[0]});
  };

  render(){
    var google_link = "https:\/\/www.google.com/maps/search/?api=1&query=" + this.state.location.location.replace(/ /g, "+");
    console.log(google_link);
    return(
      <div>
        <NewPageText>
          <Link to={``} style={{textDecoration: 'none'}}>
            <Hamburger> &#8592; </Hamburger>
          </Link>
          <p>
            {this.state.location.building}
          </p>
          <p>
            Distance from you: {this.state.location.distance} miles
          </p>
          <p>
            Address: <a href={google_link}>{this.state.location.location}</a>
          </p>
          <p>
            Reviews: To Be added?
          </p>

          <CardImage src={"https://static.thenounproject.com/png/82078-200.png"} />

        </NewPageText>
      </div>
    );
  }
}

const Hamburger = styled.p`
  position: relative;
  font-size: 2em;
  margin: 0 15px;
  margin-top: 15px;
  width: 30px;
  top: 50%;
  transform: translateY(-50%);
`;

const CardImage = styled.img`
  float:right;
  display:inline-block;
`;

const NewPageText = styled.div`
  float:left;
  display:inline-block;
`;

export default NewPage
