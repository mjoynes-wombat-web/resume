import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquare as faExternalLink } from '@fortawesome/pro-solid-svg-icons/faExternalLinkSquare';

import {
  H2, H3, H4, P, ExternalLink,
} from './textElements';

const UnstyledEduCard = ({
  className,
  heading,
  program,
  dates,
  transcript,
  description,
}) => (
  <section className={className}>
    <H2>
      {heading}
    </H2>
    <H3>
      {program}
    </H3>
    {dates.map(date => (
      <H4 key={`${heading}${date}`}>
        {date}
      </H4>
    ))}
    {description
      ? (
        <P>
          {description}
        </P>
      )
      : null}
    {transcript ? (
      <ExternalLink
        href={transcript}
        target="_blank"
      >
        <FontAwesomeIcon alt="Transcript" icon={faExternalLink} />
        <span className="text">
          {'Transcript'}
        </span>
        <span className="url">
          {`Transcript: https://resume.simeonsmith.me${transcript}`}
        </span>
      </ExternalLink>
    )
    : null}
  </section>
);

UnstyledEduCard.propTypes = {
  className: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
  dates: PropTypes.arrayOf(PropTypes.string).isRequired,
  transcript: PropTypes.string,
  description: PropTypes.string,
};

UnstyledEduCard.defaultProps = {
  transcript: null,
  description: null,
};

const EduCard = Styled(UnstyledEduCard)`
`;

export default EduCard;
