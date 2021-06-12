import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
        return (
         <div>
            <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.props.counters.map(counter => 
            <Counter 
             key = {counter.id} 
             onIncrement = {this.props.onIncrement}
             onDelete={this.props.onDelete} 
             counter={counter}
            />)}
        </div> );
        //defined an onDelete arguement so the handleDelete function could be accessible in the counter component 
    }
}
 
export default Counters;