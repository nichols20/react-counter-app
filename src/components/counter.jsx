import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1','tag2','tag3']
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
          <button className= 'btn btn-secondary btn-sm'>Increment</button>
          <ul>
              {this.state.tags.map(tag => <li>{tag}</li>)}
          </ul>
        </React.Fragment>
        );
    }

    formatCount(){
        const { count }  = this.state;
        return count === 0 ? 'zero' : count;
    }

    counterClassName(){
        let className = 'badge m-2 badge-'
        className += (this.state.count === 0)? 'warning' : 'primary'
        return className
    }
}
 
export default Counter;