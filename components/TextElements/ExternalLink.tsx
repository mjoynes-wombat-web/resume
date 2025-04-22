import React from 'react'

import style from '../../scss/components/TextElements/ExternalLink.module.scss'

export default function ExternalLink({
  className,
  target = '_blank',
  display = 'inline',
  href,
  children,
}: {
  className?: string
  target?: '_blank'
  display?: 'inline' | 'block'
  href: string
  children: React.ReactNode
}) {
  console.log(
    style[`external-link_${display}`],
    `external-link_${display}`,
    href
  )
  return (
    <a
      href={href}
      target={target}
      className={`${style['external-link']} ${className} ${
        display ? style[`external-link_${display}`] : ''
      }`}
    >
      {children}
    </a>
  )
}
