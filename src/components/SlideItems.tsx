import { Fragment, ReactNode } from 'react'

interface Props {
  items: Record<string, ReactNode>
}

export function SlideItems({ items }: Props) {
  return (
    <>
      {Object.entries(items).map(([key, node]) => (
        <Fragment key={key}>{node}</Fragment>
      ))}
    </>
  )
}
