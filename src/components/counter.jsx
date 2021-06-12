import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value
    };

    styles = {
        fontSize: 20,
        fontWeight: 'bold'
    };
    

    render() {
        return (
        <React.Fragment>
          <span style = {this.styles} className= {this.counterClassName()}>
            {this.formatCount()}
          </span>
          <button  onClick = {this.addCount}className= 'btn btn-secondary btn-sm'>Increment</button>
          <button  onClick = {() => this.props.onDelete(this.props.counter.id)} className= 'btn btn-danger btn-sm m-2'>Delete</button>
        </React.Fragment>
        );
        //To change the state of the counters component I had to raise the onDelete event and have the counters component set the state itself
        //I did this by passing an onclick function that equals a prop I defined in the counters component containing the argument of the id of the
        //counter that was clicked. go to counters module for more  information.
    }

    formatCount(){
        const { value }  = this.state;
        return value === 0 ? 'zero' : value;
    }

    addCount = () => {
        this.setState({value: this.state.value + 1})
    }

    counterClassName(){
        let className = 'badge m-2 badge-'
        className += (this.state.value === 0) ? 'warning' : 'primary'
        return className
    }
}
 
export default Counter;