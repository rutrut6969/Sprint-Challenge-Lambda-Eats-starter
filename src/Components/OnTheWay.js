import React from 'react';
import { H2 } from './styles/styles';
export default function OnTheWay(props) {
  return (
    <>
      <div className='OTWHead'>
        <H2>Congrats! Pizza is on its way!</H2>
      </div>
      <div className='OTWGif'>
        <h5>In the mean time enjoy this gif of a dog with some pizza!</h5>
        <iframe
          src='https://giphy.com/embed/9fuvOqZ8tbZOU'
          width='480'
          height='480'
          frameBorder='0'
          class='giphy-embed'
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
