import React from 'react';
import Counter from './CounterScore/Counter';
import Sample from './Sample';

export default function App(){
  return (
    <>
      <Sample />
      <Counter
        anotherValue={200}
        initialValue={100}
      />
    </>
  )
}
