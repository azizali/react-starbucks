import React, { useState, useEffect } from 'react'

export default function CounterHook (){
  const [score, setScore] = useState(50);
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    firstName: 'Star',
    lastName: 'Bucks',
  });

  const handleCount = () => {
    setCount(count+1)
    setData({
      ...data,
      firstName: 'Shiny'
    })
  }

  const handleScore = ()=>{
    setScore(score+1)
  }

  // componentDidMount && componentDidUpdate
  // RUN AFTER EVERY RENDER, not tracking any dependecy
  useEffect(()=>{
    console.log('useEffect')
  })

  // componentDidMount
  // ONLY RUN ON MOUNT, tracking no dependecny
  useEffect(()=>{
      console.log('useEffect')
  }, [])

  // componentDidMount && when score update
  // Tracking only score dependency
  useEffect(()=>{
    console.log('useEffect when score changes')
  }, [score])

  console.log('Above return')
  return (
    <div>
      <button onClick={handleScore}>Score: {score}</button>
      <button onClick={handleCount}>Count: {count}</button>
      <pre>
        {JSON.stringify(data, null, 4)}
      </pre>
    </div>
  )
}