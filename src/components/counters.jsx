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

     //because we deleted the state object in the counters component we have now have a single source of truth this allows us to change the value
     //of counters to 0 as shown in handleReset were as before the values would have been overriden by the child state excluding handleIncrement.
     //now that we have removed the child state we must now reitterate the handleIncrement method.
     //handleIncrement takes the counter object selected as it's argument.
     handleIncrement = counter => {
         // we then define a counters variable to equal the current array in the state object using the rest opperator
        const counters = [...this.state.counters]
        //Defined index and have it equal the index of where we can find the counter object that was passed in the function argument 
        const index = counters.indexOf(counter)
        //we then have counters[whatever index selected] = the id and values of the object selected
        counters[index] = {...counter}
        //then increment the value of that object by 1
        counters[index].value++
        //finally we dynamically set the state object to the new counters array
        this.setState({counters})
     }

     //This function takes the counterId value then defines a counter object that returns an array that is filtered only excluding the object
     //that equals the same Id that is passed in the function argument. We then dynamically set the state in this function to have the 
     //counter array = the new counters array passed.
     handleDelete = (counterID) => {
        const counters = this.state.counters.filter(c => c.id !== counterID)
        //this.setState({counters: counters})  this code is the same as the one below, we are able to simplify it beause they both have the same name
        this.setState({counters})
     }

     //Created reset method so that when clicked will reset all the values of the counters back to 0
     handleReset = () => {
         //mapped all counter objects to c then passed function that changes the value of all objects to 0 then returns that object
         const counters = this.state.counters.map(c => {
             c.value = 0
             return c
            })
         this.setState({counters})
     }

    render() { 
        return (
         <div>
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(counter => 
            <Counter 
             key = {counter.id} 
             onIncrement = {this.handleIncrement}
             onDelete={this.handleDelete} 
             counter={counter}
            />)}
        </div> );
        //defined an onDelete arguement so the handleDelete function could be accessible in the counter component 
    }
}
 
export default Counters;