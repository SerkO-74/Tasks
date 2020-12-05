import React, {useState} from 'react';
import './menu.css';









const Menu = () => {

let car = ['Skoda','Bmv','Audi','Jeep']


  return (
      <div className='flex'>
        {car.map(car => <button>{car}</button>)}
      </div>
  )};

export default Menu