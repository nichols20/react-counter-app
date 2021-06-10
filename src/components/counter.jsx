import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value 
    };

    styles = {
        fontSize: 20,
        fontWeight: 'bold'
    };
    

    render() {
        /* in the ul jsx element .map maps each item in 
        the array to an individual li containing the iterated object */ 
        return (
        <React.Fragment>
          <span style = {this.styles} className= {this.counterClassName()}>
            {this.formatCount()}
          </span>
          <button  onClick = {this.addCount}className= 'btn btn-secondary btn-sm'>Increment</button>
        </React.Fragment>
        );
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