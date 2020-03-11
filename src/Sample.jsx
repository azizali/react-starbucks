import React from 'react'

export default class Sample extends React.Component{
  handleClick = () =>{
    console.log('I was clicked')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}