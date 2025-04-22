import React from 'react'

import style from '../../scss/components/TextElements/UnorderedList.module.scss'

export type TypeChildListItem = string

type TypeSubParentListItem = {
  main: string
  subItems: TypeChildListItem[]
}

export type TypeParentListItem = {
  main: string
  subItems: (TypeSubParentListItem | TypeChildListItem)[]
}

function ChildListItem({ listItem }: { listItem: TypeChildListItem }) {
  return <li>{listItem}</li>
}

function SubParentListItem({
  listItem,
}: {
  listItem: TypeSubParentListItem | TypeChildListItem
}) {
  if (typeof listItem === 'string') {
    return <ChildListItem listItem={listItem} />
  } else {
    return (
      <li key={`secondary${listItem.main}`}>
        {listItem.main}
        <ul>
          {listItem.subItems.map((tertiaryItem) => (
            <ChildListItem
              key={`tertiary${tertiaryItem}`}
              listItem={tertiaryItem}
            />
          ))}
        </ul>
      </li>
    )
  }
}

function ParentListItem({
  listItem,
}: {
  listItem: TypeParentListItem | TypeChildListItem
}) {
  if (typeof listItem === 'string') {
    return <ChildListItem listItem={listItem} />
  } else {
    return (
      <li>
        {listItem.main}
        <ul>
          {listItem.subItems.map(
            (secondaryItem: TypeSubParentListItem | TypeChildListItem) => (
              <SubParentListItem
                listItem={secondaryItem}
                key={`secondary${
                  typeof secondaryItem === 'string'
                    ? secondaryItem
                    : secondaryItem.main
                }`}
              />
            )
          )}
        </ul>
      </li>
    )
  }
}

export default function UnorderedList({
  list,
}: {
  list: (TypeParentListItem | TypeChildListItem)[]
}) {
  return (
    <ul className={style['unordered-list']}>
      {list.map((item: TypeParentListItem | TypeChildListItem) => (
        <ParentListItem
          key={`primary${typeof item === 'string' ? item : item.main}`}
          listItem={item}
        />
      ))}
    </ul>
  )
}
