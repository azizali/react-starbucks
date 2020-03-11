import React from 'react'

export default class Population extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: [],
      isLoading: true
    }
  }

  componentDidMount(){
    const url = `https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=${this.props.year}`
    fetch(url)
      .then((response)=>{
        return response.json()
      })
      .then((res)=>{
        console.log('res', res.data)
        this.setState({
          data: res.data,
          isLoading: false,
        })
      })
  }

  componentDidUpdate(prevProps){
    if(this.props.year === prevProps.year) {
      return
    }
    const url = `https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=${this.props.year}`
    fetch(url)
      .then((response)=>{
        return response.json()
      })
      .then((res)=>{
        console.log('res', res.data)
        this.setState({
          data: res.data,
          isLoading: false,
        })
      })
  }

  render(){
    console.log('Year', this.props.year)
    return (
      <div>
        {this.state.isLoading && <div>Loading...</div>}
        {!this.state.isLoading && this.state.data.map((item)=>(
          <div>
            <span>{item.Nation}, </span>
            <span>{item.Year}, </span>
            <span>{item.Population}</span>
          </div>
        ))}
      </div>
    )
  }

}