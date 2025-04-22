import React from 'react'

import TextElements from './TextElements'
import {
  TypeChildListItem,
  TypeParentListItem,
} from './TextElements/UnorderedList'

export default function ExperienceCard({
  heading,
  list,
}: {
  heading: string
  list: (TypeParentListItem | TypeChildListItem)[]
}) {
  return (
    <section>
      <h2>{heading}</h2>
      <TextElements.UnorderedList list={list} />
    </section>
  )
}
