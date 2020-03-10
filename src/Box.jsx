import React from 'react';

export default function Box(props){
  console.log(props)
  return (
    <div style={{
      border: '2px solid green',
      backgroundColor: '#ccc'
    }}>
      {props.children}
    </div>
  )
}
