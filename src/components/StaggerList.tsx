import clsx from 'clsx'
import { motion } from 'framer-motion'
import { ComponentType } from 'react'

interface Props {
  className?: string
  items: ComponentType<{ size?: number }>[]
  visible?: boolean
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function StaggerList({ className, items, visible }: Props) {
  return (
    <motion.div
      className={clsx('flex justify-between', className)}
      variants={container}
      initial="hidden"
      animate={visible ? 'show' : 'hidden'}
    >
      {items.map(Item => (
        <motion.div key={String()} variants={item}>
          <Item size={64} />
        </motion.div>
      ))}
    </motion.div>
  )
}
