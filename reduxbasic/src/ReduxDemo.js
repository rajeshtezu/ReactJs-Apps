import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component {

  render(){
    // step 2: Reducer: state and action
    const reducer = function(state, action){
      if(action.type === "ATTACK"){
        return action.payload;
      }
      else if(action.type === "GREENATTACK"){
        return action.payload;
      }
      else{
        return state;
      }
    }

    // step 1: Store: Reducer and state
    const store = createStore(reducer, "Peace");


    // step 3: Subscribe
    store.subscribe(() => {
      console.log("Store is now ", store.getState());
    });

    // step 4: Dispatch action --->  to send commands
    store.dispatch({type: "ATTACK", payload: "Iron Man"});
    store.dispatch({type: "GREENATTACK", payload: "HULK"});

    return(
      <div>
        hello world
      </div>
    );
  }
}

export default ReduxDemo;
