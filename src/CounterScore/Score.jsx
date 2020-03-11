import React from 'react'

export default class Score extends React.Component {
  constructor(props){
    super(props)
    console.log('Score constructor')
  }

  componentDidMount(){
    console.log('Score componentDidMount')
  }
  
  componentDidUpdate(){
    console.log('Score componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('Score componentWillUnmount')
  }

  render(){
    console.log('Score render')
    return <div>Score: {this.props.value}</div>
  }
}