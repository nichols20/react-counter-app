import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
        console.log('Counters - Rendered')
        const {onReset, counters, onIncrement, onDelete, onDecrement} = this.props 
        return (
         <div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter => 
            <Counter 
             key = {counter.id} 
             onIncrement = {onIncrement}
             onDelete={onDelete}
             onDecrement={onDecrement} 
             counter={counter}
            />)}
        </div> );
        //defined an onDelete arguement so the handleDelete function could be accessible in the counter component 
    }
}
 
export default Counters;