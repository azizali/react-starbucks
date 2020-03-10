import React from 'react';
import Box from './Box';
// import Header from './Header';
import Footer from './Footer';

export default function App(){
  return (
    <div>
      <br />
      <hr />
      <input />
      <Box />
      <hr />
      <Box>
        <Box children="Something" />
        {/* <Header /> */}
        <Footer />
        data over here
        whatever thing
      </Box>
    </div>
  )
}
