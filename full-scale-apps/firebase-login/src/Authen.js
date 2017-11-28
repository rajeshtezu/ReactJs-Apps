import React, { Component } from 'react';
var firebase = require('firebase');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBWZUdSltt1dLB8EAbp_MFzZK1EaVzTsRM",
  authDomain: "usurvey-4719f.firebaseapp.com",
  databaseURL: "https://usurvey-4719f.firebaseio.com",
  projectId: "usurvey-4719f",
  storageBucket: "usurvey-4719f.appspot.com",
  messagingSenderId: "919258967285"
};
firebase.initializeApp(config);

class Authen extends Component {

  login(){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);

    // TODO: handle login promise
    promise.catch(e => {
      let err = e.message;
      console.log(err);
      this.setState({err: err});
    });
  }

  constructor(props){
    super(props);

    this.state = {
      err: ''
    };
    this.login = this.login.bind(this);
  }

  render(){
    return(
      <div>
        <input id="email" type="email" ref="email" placeholder="Enter your email" /> <br />
        <input id="pass" type="password" ref="password" placeholder="Enter your password" /> <br />
        <p>{this.state.err}</p>

        <button onClick={this.login}>Log In</button>
        <button>Sign Up</button>
        <button>Log Out</button>
      </div>
    );
  }
}

export default Authen;
