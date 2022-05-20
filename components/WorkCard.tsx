import React from 'react'

export default function WorkCard({
  heading,
  title,
  dates,
  city,
  description,
}: {
  heading: string
  title: string
  dates: string[]
  city: string
  description: string
}) {
  return (
    <section>
      <h2>{heading}</h2>
      <h3>{title}</h3>
      {dates.map((date) => (
        <h4 key={`${heading}${date}`}>{date}</h4>
      ))}
      <p>{city}</p>
      <p>{description}</p>
    </section>
  )
}
