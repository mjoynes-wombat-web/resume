import React from 'react'

import TextElements from './TextElements'

import FaLinkedIn from '../font-awesome/free/brands/linkedin-in.svg'
import FaGitHub from '../font-awesome/free/brands/github.svg'
import FaExternalLink from '../font-awesome/pro/solid/external-link-square.svg'
import FaEnvelop from '../font-awesome/free/solid/envelope.svg'

import style from '../scss/components/ContactCard.module.scss'

export default function ContactCard({
  name,
  email,
  cell,
  linkedin,
  github,
  portfolio,
  contact,
}: {
  name: string
  email: string
  cell: string
  linkedin: string
  github: string
  portfolio: string
  contact: string
}) {
  return (
    <article id="contactCard" className={style['contact-card']}>
      <h2>{name}</h2>
      <section id="contactInfo">
        <TextElements.ExternalLink href={`mailto:${email}`} display="block">
          {email}
        </TextElements.ExternalLink>
        <TextElements.ExternalLink href={`tel:${cell}`} display="block">
          {cell}
        </TextElements.ExternalLink>
      </section>
      <section id="social">
        <TextElements.ExternalLink href={linkedin} target="_blank">
          <span className={style['contact-card_url']}>{linkedin}</span>
          <FaLinkedIn atl="LinkedIn" />
        </TextElements.ExternalLink>
        <TextElements.ExternalLink href={github} target="_blank">
          <span className={style['contact-card_url']}>{github}</span>
          <FaGitHub alt="GitHub" />
        </TextElements.ExternalLink>
        <TextElements.ExternalLink href={portfolio} target="_blank">
          <span className={style['contact-card_url']}>{portfolio}</span>
          <FaExternalLink alt="Marwynn's Portfolio" />
        </TextElements.ExternalLink>
        <TextElements.ExternalLink
          href={contact}
          className={style['contact-card_no-print']}
          target="_blank"
        >
          <span className={style['contact-card_url']}>{contact}</span>
          <FaEnvelop alt="Send Message" />
        </TextElements.ExternalLink>
      </section>
    </article>
  )
}
