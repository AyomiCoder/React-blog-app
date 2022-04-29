import React from 'react';
import "./style.css"

const d = new Date();

const Footer = () => {
  return (
    <div>
    <p className='footer'>toluomoniyiblog<br />(c){d.getFullYear()}</p>
    </div>
  )
}

export default Footer