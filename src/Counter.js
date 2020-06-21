import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer';
import './App.css';

function Counter()
{
    let [state, dispach] = useReducer(CounterReducer, 0);
    return(
        <div>
            <div className="counterText">{state}</div>
            <br/><br/>
            <button className="counterButton" onClick={()=>dispach('DECREMENT')}>-</button>
            <button className="counterButton" onClick={()=>dispach('INCREMENT')}>+</button>
            <br/><br/>
            <button className="counteReset" onClick={()=>dispach('RESET')}>Reset</button>
        </div>
    );
}

export default Counter;