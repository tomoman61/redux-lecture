import React, { useReducer } from 'react'
import logo from './logo.svg';
import './App.css';
import rootReducer from './reducers/index';
import { SELL_MEAT, SELL_VEGETABLE } from './reducers/actionTypes'

function App() {
  const initialState = {
      reducerMeat: {numOfMeat:30},
      reducerVegetable: {numOfVegetable: 20}
  }
  const [state, dispatch] = useReducer(rootReducer, initialState)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>dispatch({type: SELL_MEAT})}>SELL_MEAT</button>
          <div>{state.reducerMeat.numOfMeat}</div>
          <button onClick={()=>dispatch({type: SELL_VEGETABLE})}>SELL_VEGETABLE</button>
          <div>{state.reducerVegetable.numOfVegetable}</div>
      </header>
    </div>
  );
}

export default App;
