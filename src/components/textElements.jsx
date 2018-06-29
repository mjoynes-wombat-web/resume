
import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

function isObject(obj) {
  return (typeof obj === 'object') && (obj !== null);
}

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

export const ExternalLink = Styled.a`
font-size: 1rem;
color: red;
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
`;
