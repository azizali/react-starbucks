import React from 'react'

// key are reserved prop in react, not accessible by React developers. DO NOT reference them like such below:
export default function Item ({content , key}){
  return (
  <p>{key},{content}</p>
  )
}