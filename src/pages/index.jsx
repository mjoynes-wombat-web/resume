import React from 'react';

import {
  H1, SubH1, H2, H3, H4, P, ExternalLink,
} from '../components/textElements';

const IndexPage = () => (
  <div>
    <H1>
        Who Am I?
    </H1>
    <P>
        I have been a graphic designer for a decade and have a love for creating stunning visuals that make it easy for people to get the information they are searching for. The technical portions of my work have always been an attraction to me. For this reason I chose to pursue a career in web design and development. It turns out that it's a perfect fit that excites and intrigues me.
    </P>
    <H1>
        My Skills
    </H1>
    <H2>
        Web Design
    </H2>
    <ExternalLink href="https://www.simeonsmith.me/">
        This is a test.
    </ExternalLink>
  </div>
);

export default IndexPage;
