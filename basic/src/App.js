import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
  render(){
    return(
      <div>
        Cool react app, some more text
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
