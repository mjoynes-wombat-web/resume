import React from 'react';

import {
  H1, SubH1, H2, H3, H4, P, ExternalLink,
} from '../components/textElements';

const IndexPage = () => (
  <div>
    <H1>
        Test 1
    </H1>
    <H2>
        Test 2
    </H2>
    <H3>
        Test 3
    </H3>
    <H4>
        Test 4
    </H4>
    <P>
        Body text.
    </P>
    <H1>
        Test 1
    </H1>
    <SubH1>
        Subheading
    </SubH1>
    <P>
        Body text.
    </P>
    <H2>
        Test 2
    </H2>
    <P>
        Body text.
    </P>
    <H3>
        Test 3
    </H3>
    <P>
        Body text.
    </P>
    <H4>
        Test 4
    </H4>
    <P>
        Body text.
    </P>
    <ExternalLink href="https://www.simeonsmith.me/">
        This is a test.
    </ExternalLink>
  </div>
);

export default IndexPage;
