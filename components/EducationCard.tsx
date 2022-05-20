import React from 'react'

import TextElements from './TextElements'

import FaExternalLink from '../font-awesome/pro/solid/external-link-square.svg'

export default function EducationCard({
  heading,
  program,
  dates,
  transcript = '',
  description = '',
}: {
  heading: string
  program: string
  dates: string[]
  transcript: string
  description: string
}) {
  return (
    <section>
      <h2>{heading}</h2>
      <h3>{program}</h3>
      {dates.map((date) => (
        <h4 key={`${heading}${date}`}>{date}</h4>
      ))}
      {description ? <p>{description}</p> : null}
      {transcript ? (
        <TextElements.ExternalLink
          href={transcript}
          target="_blank"
          display="block"
        >
          <FaExternalLink alt="Transcript" />
          <span className="text">{'Transcript'}</span>
          <span className="url">
            {`Transcript: https://resume.marwynn.net${transcript}`}
          </span>
        </TextElements.ExternalLink>
      ) : null}
    </section>
  )
}
