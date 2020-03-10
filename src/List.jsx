import React from 'react'
import Item from './Item';

const items = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
]

// const items = [
//   <div>A</div>
//   <div>B</div>
//   <div>C</div>
//   <div>D</div>
// ]

export default function List (){
  return (
    <div>
      {items.map((item)=>{
        return <Item
          id={item.name}
          key={item.name}
          content={item.name}
        />
      })}
    </div>
  )
}