import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function App(){
  // React Fragment
  return (
    <React.Fragment>
      <Header />
      <p>This is some info</p>
      <div>
        <Content />
        <Footer />
      </div>
    </React.Fragment>
  )
}
