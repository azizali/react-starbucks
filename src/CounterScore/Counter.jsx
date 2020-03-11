import React from 'react'
import produce from 'immer'
import Score from './Score'
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
      countTwo: 0,
      userName: 'Starbucks',
      info: {
        data: {
          something: 'else',
          somethingTwo: 'elsetwo'
        },
        dataTwo: {
          something: 'else',
          somethingTwo: 'elsetwo'
        }
      }
    }
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
      countThree: this.state.count + 1,
    }, ()=>{
      console.log('inside done', this.state.count)
    })
    console.log('outside done', this.state.count)
  }
  
  handleClick2 = () => {
    this.setState((prevState, prevProp)=>{
      return {
        countTwo: prevState.countThree + 1
      }
    }, ()=>{})
  }

  handleInput = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  handleInputDeep = (e) => {
    const newInfo = produce(this.state.info, (draftInfo)=>{
      draftInfo.dataTwo.something = e.target.value
    })

    this.setState({
      info: newInfo
    })

    // this.setState({
    //   info: {
    //     ...this.state.info,
    //     // data: {
    //     //   something: 'else',
    //     //   somethingTwo: 'elsetwo'
    //     // },
    //     // dataTwo: {
    //     //   something: 'else',
    //     //   somethingTwo: 'elsetwo'
    //     // }

    //     dataTwo: {
    //       ...this.state.info.dataTwo,
    //       something: e.target.value
    //     }
    //   }
    // })
  }

  render(){
    console.log('I am render')
    const { initialValue, anotherValue } = this.props;
    return (
      <div>
        I am Counter Class {initialValue}, {anotherValue}
        <br/>
        <input
          onChange={this.handleInputDeep}
          type="text"
          value={this.state.info.dataTwo.something}
        />
        <input
          onChange={this.handleInput}
          type="text"
          value={this.state.userName}
        />
        <button onClick={this.handleClick}>Count: {this.state.count}</button>
        <button onClick={this.handleClick2}>CountTwo:{this.state.countTwo}</button>
        CountThree: {this.state.countThree}
        {
          this.state.count !== 3
          && <Score value={this.state.count+this.state.countTwo} />
        }
      </div>
    )
  }
}