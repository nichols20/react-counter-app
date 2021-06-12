import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
     }

     //This function takes the counterId value then defines a counter object that returns an array that is filtered only excluding the object
     //that equals the same Id that is passed in the function argument. We then dynamically set the state in this function to have the 
     //counter array = the new counters array passed.
     handleDelete = (counterID) => {
        const counters = this.state.counters.filter(c => c.id !== counterID)
        //this.setState({counters: counters})  this code is the same as the one below, we are able to simplify it beause they both have the same name
        this.setState({counters})
     }

    render() { 
        return (
         <div>
            {this.state.counters.map(counter => 
            <Counter key = {counter.id} onDelete={this.handleDelete} counter={counter}/>)}
        </div> );
        //defined an onDelete arguement so the handleDelete function could be accessible in the counter component 
    }
}
 
export default Counters;