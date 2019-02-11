import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import data from '../location.json';

class NewPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      location: {}
    }
  }

  sayHello = () => {
    console.log("hello");
  }

  componentWillMount = () => {
    this.setState({ location: data.location.filter(location => location.id === this.props.match.params.id)[0]});
  };
  render(){

    let google_link = "https://www.google.com/maps/search/?api=1&query=" + this.state.location.location.replace(/ /g, "+");
    let review = "No reviews yet"
    if (this.state.location.review){
      review = '"'+ this.state.location.review + '"'
    }
    console.log(google_link);
    return(
      <div>
        <NewPageText>
          <Link to={``} style={{textDecoration: 'none'}}>
            <Hamburger> &#8592; </Hamburger>
          </Link>
          <TextHolder>
            <CardTitle>
              {this.state.location.building}
            </CardTitle>
            <p>
              Distance from you: {this.state.location.distance} miles
            </p>
            <p>
              Address: <a href={google_link}>{this.state.location.location}</a>
            </p>
            <p>
              Reviews: {review}
            </p>
            <button type="button" onClick={this.sayHello}>Add a Review</button>
          </TextHolder>

          <CardImage src={"https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png"} />
          <PhotoButtons type="button" onClick={this.sayHello}>Add a Photo</PhotoButtons>

        </NewPageText>
      </div>
    );
  }
}

const PhotoButtons = styled.button`
  float:right;
`

const TextHolder = styled.div`
  display:inline-block;
`;

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
  display:inline-block;
  width:100%;

`;

const CardTitle = styled.p`
  margin:0px;
  font-size:24px;
  white-space:nowrap;
  text-overflow: ellipsis;
  width:calc(100% - 120px);
`;

export default NewPage
