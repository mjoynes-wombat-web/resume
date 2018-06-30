
import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

function isObject(obj) {
  return (typeof obj === 'object') && (obj !== null);
}

const marine = '#3368c4';
const royal = '#003ca4';
const brightRoyal = '#0054e6';
const smallBreak = '600px';

export const H1 = Styled.h1`
font-size: 3.5rem;
margin: 2rem 0 0.75rem 0;
border-bottom: 0.42rem ${marine} dotted;
padding-bottom: 0.625rem;
display: inline-block;

@media screen and (min-width: ${smallBreak}) {
  border-width: 0.375rem;
}

@media print {
  margin: 1.5rem 0 0.5rem 0;
}
`;

export const H2 = Styled.h2`
font-size: 2rem;
margin: 1rem 0 0.75rem 0;

@media print {
  margin: 0.875rem 0 0.375rem 0;
}
`;

export const H3 = Styled.h3`
font-size: 1.5rem;
margin: 0.875rem 0 1rem 0;
line-height: 2rem;
`;

export const H4 = Styled.h4`
font-size: 1rem;
font-weight: 400;
margin: 0.5rem 0;

&:first-of-type {
  margin-top: 1.25rem;
}

&:last-of-type {
  margin-bottom: 1.25rem;
}
`;

export const P = Styled.p`
font-size: 1.25rem;
line-height: 1.625rem;
margin: 0.875rem 0;
max-width: 45rem;

@media print {
  margin: 0.5rem 0;
}
`;

export const ExternalLink = Styled.a.attrs({
  target: ({ target }) => target,
})`
color: ${royal};
font-size: 1.25rem;
line-height: 1.625rem;
margin: 0.875rem 0;
display: block;
transition: color 0.5s, transform 0.5s;
transform-origin: left;

&:hover {
  color: ${brightRoyal}
  transform: scale(1.04);
}
`;

export const UnstyledUList = ({ className, list }) => (
  <ul className={className}>
    {list.map(item => (isObject(item)
      ? (
        <li key={`primary${item.main}`}>
          {item.main}
          <ul className="secondary">
            {item.subItems.map(secondaryItem => (isObject(secondaryItem)
              ? (
                <li key={`secondary${secondaryItem.main}`}>
                  {secondaryItem.main}
                  <ul className="tertiary">
                    {secondaryItem.subItems.map(tertiaryItem => (
                      <li key={`tertiary${tertiaryItem}`}>
                        {tertiaryItem}
                      </li>
                    ))}
                  </ul>
                </li>
              )
              : (
                <li key={`secondary${secondaryItem}`}>
                  {secondaryItem}
                </li>
              )))}
          </ul>
        </li>
      )
      : (
        <li key={`primary${item}`}>
          {item}
        </li>
      )
    ))}
  </ul>
);

UnstyledUList.propTypes = {
  className: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({
      main: PropTypes.string,
      subItems: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.shape({
          main: PropTypes.string,
          subItems: PropTypes.arrayOf(PropTypes.string),
        }),
        PropTypes.string,
      ])),
    }),
    PropTypes.string,
  ])).isRequired,
};

export const UList = Styled(UnstyledUList)`
font-size: 1.25rem;
line-height: 1.5rem;
margin: 0.75rem 0;
list-style: none;
padding-left: 0;

@media print {
  margin: 0.5rem 0 0.25rem 0;
}

ul {
  list-style: none;
  padding-left: 1rem;
}

li {
  margin: 0.25rem 0;
  @media print {
    margin: 0.125rem 0;
  }
  &::before {
    color: ${marine};
    content: '◦';
    font-size: 1.75rem;
    margin-right: 0.5rem;
    position: relative;
    top: 0.125rem;

  }
}
`;
