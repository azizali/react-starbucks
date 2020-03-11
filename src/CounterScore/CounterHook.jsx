import React, { useState } from 'react'

export default function CounterHook (){
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

  return (
    <div>
      <button onClick={handleCount}>Count: {count}</button>
      <pre>
        {JSON.stringify(data, null, 4)}
      </pre>
    </div>
  )
}