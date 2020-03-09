import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function App(){
  // React Fragment
  return (
    <React.Fragment>
      <Header
        // name="Starbucks"
        age={35}
        info={{
          "address": "Seattle, WA",
          employeeCount: 5000,
          anotherFunc: ()=>{
            return 'something else'
          }
        }}
        callMe = {()=>{
          return '1.800.123.4567'
        }}
        friends={["A", "B","C"]}
      />
      <p>This is some info</p>
      <div>
        <Content />
        <Footer />
      </div>
    </React.Fragment>
  )
}
