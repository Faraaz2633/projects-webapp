import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          style={{ display: 'flex', alignItems: 'center', color: 'white' }}
        >
          <DiCssdeck size="3rem" />
          <Span>Fz</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="https://www.mdfaraz.tech/" target="_blank">
          <a target="_blank">
            <NavLink>Portfolio</NavLink>
          </a>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Faraaz2633" target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/md-faraz" target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://twitter.com/md_faraz01" target="_blank">
        <AiFillTwitterCircle size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
