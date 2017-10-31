import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
    super(props);

    this.state = {
      clock: 0
    };
    this.ticker = this.ticker.bind(this);
  }

  ticker(){
    this.setState({
      clock: new Date() - this.props.start
    });
  }

  componentDidMount(){
    setInterval(this.ticker, 1000);
  }

  render(){
    let clock = Math.round(this.state.clock / 1000);
    return(
      <div>
        <p>You have been on this site since: </p>
        <span> {clock} </span>
        <p>Seconds.</p>
      </div>
    );
  }
}

export default Timer;
