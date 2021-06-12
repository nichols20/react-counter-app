import React, { Component } from 'react';

class Counter extends Component {
    //Deleted state because their was no single source of truth for a reset button to be operable
    //this counter component has now transformed into a controlled component which is a component 
    //that doesn't contain a local state, receives all its data through props then if need be
    //raises events to change received data, Parent component handles those events.
    styles = {
        fontSize: 20,
        fontWeight: 'bold'
    };

    componentDidUpdate(prevProps, prevState){
        console.log('prevProps', prevProps) 
        console.log('prevState', prevState)
        if (prevProps.counter.value !== this.props.counter.value){

        } 
    }

    componentWillUnmount() {
        console.log('counter- Unmount')
    }
    

    render() {
        console.log('counter - rendered')
        return (
        <React.Fragment>
          <span style = {this.styles} className= {this.counterClassName()}>
            {this.formatCount()}
          </span>
          <button  onClick = {() => this.props.onIncrement(this.props.counter)}className= 'btn btn-secondary btn-sm'>Increment</button>
          <button  onClick = {() => this.props.onDelete(this.props.counter.id)} className= 'btn btn-danger btn-sm m-2'>Delete</button>
        </React.Fragment>
        );
        //To change the state of the counters component I had to raise the onDelete event and have the counters component set the state itself
        //I did this by passing an onclick function that equals a prop I defined in the counters component containing the argument of the id of the
        //counter that was clicked. go to counters module for more  information.
    }

    formatCount(){
        const { value }  = this.props.counter;
        return value === 0 ? 'zero' : value;
    }

    counterClassName(){
        let className = 'badge m-2 badge-'
        className += (this.props.counter.value === 0) ? 'warning' : 'primary'
        return className
    }
}
 
export default Counter;