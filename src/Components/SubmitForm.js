import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withFirebase } from './Firebase';

// I used the template from this website: https://reactjs.org/docs/forms.html

class SubmitForm extends Component{
  constructor(props) {
   super(props);
   this.state = {
     value: '',
    };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
   this.setState({value: event.target.value});
 };

 handleSubmit(event) {
   // alert('You added this review: ' + this.state.value);
   var loc_id = Number(this.props.loc.id)-1;
   var old_text = '';
   this.props.data.child(loc_id + '/review').on("value", function(snapshot) {
     old_text = snapshot.val();
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });

   console.log(old_text);
   var new_review = old_text.concat('\n').concat(this.state.value);
   console.log(new_review);
   this.props.data.child(loc_id).update({
     review: new_review
   });

   event.preventDefault();
 };

 render() {
   return (
     <form onSubmit={this.handleSubmit}>
     <label>
       Add Review:
       <input type="text"  value={this.state.value} onChange={this.handleChange}  />
     </label>
     <input type="submit" value="Submit" />
     </form>
   );
 }
}

export default SubmitForm
