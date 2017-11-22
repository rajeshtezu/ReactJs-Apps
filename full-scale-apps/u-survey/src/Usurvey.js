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
  nameSubmit(event){
    let studentName = this.refs.name.value;
    this.setState({studentName: studentName}, function(){
      console.log(this.state)
    });
  }

  answerSelected(){

  }

  questionSubmit(){
    
  }

  constructor(props){
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: 'something',
      answers: {
        answer1: '',
        answer2: '',
        answer3: ''
      },
      isSubmitted: false
    };
    this.nameSubmit = this.nameSubmit.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
  }

  render(){
    let studentName;
    let questions;

    if(this.state.studentName === '' && this.state.isSubmitted === false){
      studentName = <div>
        <h1>Your name please...</h1>
        <form onSubmit={this.nameSubmit}>
          <input className="namy" type="text" placeholder="Enter your name" ref="name" />
        </form>
      </div>;

      questions = '';
    }
    else if(this.state.studentName !== '' && this.state.isSubmitted === false){
      studentName = <h1>Welcome to U-survey, {this.state.studentName}</h1>;
      questions = <div>
        <h2>Here are some questions: </h2>
        <form onSubmit={this.questionSubmit}>
          <div className="card">
            <label>What kind of courses you like the most: </label> <br />
            <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected}/>Technology
            <input type="radio" name="answer1" value="Design" onChange={this.answerSelected}/>Design
            <input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected}/>Marketing
          </div>
          <div className="card">
            <label>You are a: </label> <br />
            <input type="radio" name="answer2" value="Student" onChange={this.answerSelected}/>Student
            <input type="radio" name="answer2" value="in-job" onChange={this.answerSelected}/>in-job
            <input type="radio" name="answer2" value="looking-job" onChange={this.answerSelected}/>looking-job
          </div>
          <div className="card">
            <label>Is online courses helpful: </label> <br />
            <input type="radio" name="answer3" value="Yes" onChange={this.answerSelected}/>Yes
            <input type="radio" name="answer3" value="No" onChange={this.answerSelected}/>No
            <input type="radio" name="answer3" value="maybe" onChange={this.answerSelected}/>Maybe
          </div>
          <input className="feedback-button" type="submit" value="Submit" />
        </form>
      </div>;
    }

    return(
      <div>
        {studentName}
        --------------------------------------------------
        {questions}
      </div>
    );
  }
}

export default Usurvey;
