import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'
import NewPage from './NewPage.js'

class Card extends Component{
 // code below is from https://medium.com/@anneeb/redirecting-in-react-4de5e517354a
 /*
  state = {redirect: false};

  setRedirect = () => {
    this.setState({redirect:true})
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <NewPage/>
    }
  }

  this goes inside card container
  {this.renderRedirect()}

  //end of used code
  */
  render() {

    function Clickme(e) {
    e.preventDefault();
    console.log('hello');
    }


    let data = this.props.propdata
    return (
      <CardContainer>

        <CardTitle>
          {data['building']}
        </CardTitle>
        <CardTag>
          {data['type']}
        </CardTag>
        <CardDistance>
          {data['distance']}
        </CardDistance>
        <CardImage src={"https://static.thenounproject.com/png/82078-200.png"} />
        <Details onClick={Clickme}>&gt;</Details>
        <CustomHR />
      </CardContainer>
    );
  }
}



const CardContainer = styled.div`
  margin:0px;
  padding:15px;
  color:#170c27;
  position:relative;
  :nth-child(odd) {
    background:#edecf9;
  }
`;

const CardImage = styled.img`
  position:absolute;
  top:3px;
  right:30px;
  width:90px;
  height:90px;
`;

const CardTitle = styled.h3`
  margin:0px;
  font-size:24px;
  overflow:hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
  width:calc(100% - 120px);
`;

const CardTag = styled.p`
  margin:0px;
  padding-left:5px;
  font-size:16px;
  height:20px;
  overflow:hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
  width:calc(100% - 120px);
`;

const CardDistance = styled.p`
  margin:0px;
  font-style:italic;
  color:#AEA3B0;
  padding-left:5px;
  font-size:16px;
`;

const Details = styled.div`
  font-size:28px;
  color:#E3D0D8;
  position:absolute;
  top:30px;
  right:5px;
`;

const CustomHR = styled.div`
  margin:0 10%;
  height:2px;
  border-bottom:1px solid black;
  position:absolute;
  bottom:0px;
  left:0px;
`;

export default Card;
