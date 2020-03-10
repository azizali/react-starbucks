import React from 'react';
// // Object Destructing
// const obj = {
//   name: 'A',
//   age: 2,
//   phone: 3
// }

// // Without Object Destructuring
// const name = obj.name
// const age = obj.age
// const phone = obj.phone

// // Object Destructuring
// const { name, age, phone } = obj

// export default function Header(props){
export default function Header({ name, callMe, age, friends, info }){
  // Do not do this
  // age = 36;
  const phone = callMe()
  return (
    <div>
      Ternary Operator: {name? 'Hi name': 'Name Not found'} <br />
      Calc: {1 + 1 / 3} <br />
      Name: {name}<br/>
      Age: {age}<br/>
      friends: {friends}<br/>
      phone: {callMe() || phone}<br/>
      Address: {info.address}<br/>
      EmployeeCount: {info.employeeCount}<br/>

      {/* TROUBLESHOOTING HACK */}
      <pre>
        {JSON.stringify(info, null, 4)}
      </pre>
    </div>
  )
}