import React from 'react'

import TextElements from './TextElements'

import FaGitHub from '../font-awesome/free/brands/github.svg'
import FaExternalLink from '../font-awesome/pro/solid/external-link-square.svg'

import style from '../scss/components/ProjectCard.module.scss'

export default function ProjectCard({
  heading,
  link,
  description,
}: {
  heading: string
  link: {
    site?: {
      text: string
      href: string
    }
    github: {
      text: string
      href: string
    }[]
  }
  description: string
}) {
  return (
    <section className={style['project-card']}>
      <h2>{heading}</h2>
      {link.site ? (
        <TextElements.ExternalLink
          href={link.site.href}
          target="_blank"
          display="block"
        >
          <FaExternalLink alt={link.site.text} />
          <span className="text">{link.site.text}</span>
          <span className="url">{`Site: ${link.site.href}`}</span>
        </TextElements.ExternalLink>
      ) : null}
      <div className={style['project-card_github-repos']}>
        {link.github.map((github) => (
          <TextElements.ExternalLink
            key={github.href}
            href={github.href}
            target="_blank"
            display="block"
          >
            <FaGitHub alt="GitHub" />
            <span className="text">{github.text}</span>
            <span className="url">{`Repo: ${github.href}`}</span>
          </TextElements.ExternalLink>
        ))}
      </div>
      <p>{description}</p>
    </section>
  )
}
