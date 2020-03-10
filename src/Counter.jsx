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
    // Way 1: prebinding `this` to the class
    // this.handleClick = this.handleClick.bind(this)
  }
  
  // Pre-requisite:
  // babel Transform Class Properties should be installed
  // handleClick = ()=>{
  //   // Wrong way
  //   // this.state.count = 2
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  handleClick(param, e, param2) {
    console.log('param', param, e, param2)
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    console.log('I am render')
    const { initialValue, anotherValue } = this.props;
    return (
      <div>
        I am Counter Class {initialValue}, {anotherValue}
        <br/>
        {/* // Way 2: Bind `this `inline */}
        <button onClick={(e)=> {this.handleClick.call(this, 'hello', e, 'c')}}>{this.state.count}</button>
        {/* <Footer
          cb={this.setState}
          value={this.state.another}
        /> */}
      </div>
    )
  }
}