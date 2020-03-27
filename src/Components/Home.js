import React from 'react';
import { Label, Link } from 'react-router-dom';
import { Wrap } from './styles/styles';

export default function Home(props) {
  return (
    <>
      <Wrap>
        <Link to='/form' className='formLink'>
          Create Pizza!
        </Link>
      </Wrap>
    </>
  );
}
