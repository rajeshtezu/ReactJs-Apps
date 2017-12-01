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

    promise.then(user => {
      let lout = document.getElementById('logout');
      lout.classList.remove('hide');
      this.setState({err: "Welcome "+user.email});
    });

    promise.catch(e => {
      let err = e.message;
      console.log(err);
      this.setState({err: err});
    });
  }

  signup(){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise
    .then(user => {
      let err = "Welcome " + user.email;
      firebase.database().ref('users/'+user.uid).set({
        email: user.email
      });
      console.log(user);
      this.setState({err: err});
    })
    .catch(e => {
      let err = e.message;
      console.log(err);
      this.setState({err: err});
    });
  }

  logout(){
    firebase.auth().signOut();

    let lout = document.getElementById('logout');
    lout.classList.add('hide');
    this.setState({err: "Thank you. Visit Again."});
  }

  constructor(props){
    super(props);

    this.state = {
      err: ''
    };
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
  }

  render(){
    return(
      <div>
        <input id="email" type="email" ref="email" placeholder="Enter your email" /> <br />
        <input id="pass" type="password" ref="password" placeholder="Enter your password" /> <br />
        <p>{this.state.err}</p>

        <button onClick={this.login}>Log In</button>
        <button onClick={this.signup}>Sign Up</button>
        <button onClick={this.logout} id="logout" className="hide">Log Out</button>
      </div>
    );
  }
}

export default Authen;
