
import Styled from 'styled-components';

export const H1 = Styled.h1`
font-size: 4rem;
margin: 2.25rem 0 1.25rem 0;
`;

export const H2 = Styled.h2`
font-size: 3.5rem;
margin: 2rem 0 1rem 0;
`;

export const H3 = Styled.h3`
font-size: 3rem;
margin: 1.75rem 0 0.75rem 0;
`;

export const H4 = Styled.h4`
font-size: 2.5rem;
margin: 1.5rem 0 0.5rem 0;
`;

export const SubH1 = H2.extend`
font-family: 'Roboto' sans-serif;
font-size: 2.5rem;
font-weight: 400;
margin: -1rem 0 1.25rem 0;
`;

export const P = Styled.p`
font-size: 1rem;
margin: 0.5rem 0;
`;
