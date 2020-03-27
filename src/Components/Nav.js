import React from 'react';
import { NavWrap, LinkWrap, Heading, Wrapper } from './styles/styles';
import { Link } from 'react-router-dom';
export default function Nav(props) {
  return (
    <Wrapper>
      <NavWrap>
        <Heading>LAMBDA EATS</Heading>

        <LinkWrap>
          <Link to='/' className='link home'>
            Home
          </Link>
          <Link to='/help' className='link help'>
            Help
          </Link>
        </LinkWrap>
      </NavWrap>
    </Wrapper>
  );
}
