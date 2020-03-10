import React from 'react';
import data from './cars.json'

export default function CarList (){
  return (
    <table border="1">
      <thead>
        <tr>
          <th>name</th>
          <th>mpg</th>
          <th>cylinders</th>
          <th>displacement</th>
          <th>horsepower</th>
          <th>weight</th>
          <th>acceleration</th>
          <th>year</th>
          <th>origin</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item, index)=>{
        return <tr key={index}>
          <td>{item.name}</td>
          <td>{item.mpg}</td>
          <td>{item.cylinders}</td>
          <td>{item.displacement}</td>
          <td>{item.horsepower}</td>
          <td>{item.weight}</td>
          <td>{item.acceleration}</td>
          <td>{item.year}</td>
          <td>{item.origin}</td>
        </tr>
      })}
      </tbody>
    </table>
  )
}

