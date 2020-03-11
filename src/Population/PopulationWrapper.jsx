import React from 'react';
import Population from './Population';

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      year: 2015
    }
  }

  render(){
    return (
      <>
        <select
          onChange={(e)=>{
            this.setState({ year: e.target.value})
          }}
        >
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
        </select>
        <Population year={this.state.year}/>
      </>
    )
  }
}
