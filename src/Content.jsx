import React from 'react';

// export default function a (){}
// export function b (){}

// Way 0: Default export function statement
// export default function Content(){
//   return (
//     <div>I am Content</div>
//   )
// }

// Way 1 Default arrow function
const Content = ()=>{
  return (
    <div>I am Content</div>
  )
}
export default Content

// Way 2 Default Arrow Function:
// export default ()=>{
//   return (
//     <div>I am Content</div>
//   )
// }

// Way 3: Named Export
// export const Content = ()=>{
//   return (
//     <div>I am Content</div>
//   )
// }
