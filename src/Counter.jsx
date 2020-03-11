import React from 'react'

// export default function Counter ({initialValue}) {
//   return (
//     <div>
//       I am Counter {initialValue}
//     </div>
//   )
// }

export default class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      anotherCounter: 0
    }
    // Way 2: To bind method `this` context
    // this.handleClick = this.handleClick.bind(this)
  }

  // Class Method
  handleClick(a, b, c){
    console.log('params', a, b, c)
    this.setState({
      count: this.state.count + 1
    })
  }
  
  // Way 3: Class Property
  // handleClick = (a, b, c) => {
  //   console.log('params', a, b, c)
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  render(){
    console.log('I am render')
    const { initialValue, anotherValue } = this.props;
    return (
      <div>
        I am Counter Class {initialValue}, {anotherValue}
        <br/>
        {/* // Way 1 to bind the this context */}
        <button onClick={(e)=> {this.handleClick.call(this, 'hello', e, 'something else')}}>{this.state.count}</button>
        {/* Way 2 / way 3 */}
        {/* <button onClick={(e)=> { this.handleClick('hello', e, 'something else') }}>{this.state.count}</button> */}
      </div>
    )
  }
}