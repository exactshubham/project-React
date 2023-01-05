//Done bye the Class Based Component


import React, {Component} from 'react';

class Counter extends Component{
    constructor(){
        super();
        this.state={count:0}
    }
    render(){
        return(
            <div>
                <button onClick={()=> this.setState({count:this.state.count + 1})}> Increment </button>
                <button onClick={()=> {this.setState({count:this.state.count - 1})}}> Decrement </button>
             <p> Count:{this.state.count}</p>
            </div>
        )
    }
}
export default Counter


//Done by Function based component


// import React, {useState} from 'react';

// function Counter2() { 
// const[count, setCount]= useState(0)
// return(<div>
//     <button onClick={()=> setCount(count+1)}> Increment</button>
//     <button onClick={()=> setCount(count-1)}> Decrement</button>
//     <p>Count :{count}</p>
//     </div>
// )
// }

// export default Counter2
