import React, { Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');


var config = {
    apiKey: "AIzaSyBWZUdSltt1dLB8EAbp_MFzZK1EaVzTsRM",
    authDomain: "usurvey-4719f.firebaseapp.com",
    databaseURL: "https://usurvey-4719f.firebaseio.com",
    projectId: "usurvey-4719f",
    storageBucket: "usurvey-4719f.appspot.com",
    messagingSenderId: "919258967285"
  };
firebase.initializeApp(config);

class Usurvey extends Component {
  constructor(props){
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: '',
      answers: {
        answer1: '',
        answer2: '',
        answer3: ''
      },
      isSubmitted: false
    };
  }

  render(){
    let studentName;
    let questions;

    if(this.state.studentName === '' && this.state.isSubmitted === false){
      studentName = <div>
        <h1>Your name please...</h1>
        <form>
          <input type="text" placeholder="Enter your name" ref="name" />
        </form>
      </div>
    }

    return(
      <div>
        {studentName}
        -------------------------------------
        {questions}
      </div>
    );
  }
}

export default Usurvey;
