import React, {useState, useEffect} from 'react'

export default function Population ({ year }){
              // const returnedValue = useState('param')
              // ['params' ()=>{ }]
  
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const url = `https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=${year}`
    fetch(url)
      .then((response)=>{
        return response.json()
      })
      .then((res)=>{
        console.log('res', res.data)
        setData(res.data)
        setIsLoading(false)
      })
  }, [year])

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && data.map((item)=>(
        <div>
          <span>{item.Nation}, </span>
          <span>{item.Year}, </span>
          <span>{item.Population}</span>
        </div>
      ))}
    </div>
  )
}