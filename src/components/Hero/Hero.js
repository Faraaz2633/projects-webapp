import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Projects WebApp
      </SectionTitle>
      <SectionText>
        This is my projects webapp where all my projects are shown below.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.mdfaraz.tech'}>My Portfolio</Button>
    </LeftSection>
  </Section>
);

export default Hero;