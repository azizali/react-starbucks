import React from 'react';
import Counter from './CounterScore/Counter';

export default function App(){
  return (
    <Counter
      anotherValue={200}
      initialValue={100}
    />
  )
}
