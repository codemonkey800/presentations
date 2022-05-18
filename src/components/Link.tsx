import { Link as RouterLink, LinkProps } from 'react-router-dom'

function isExternal(href: string): boolean {
  try {
    return !!new URL(href)
  } catch (_) {
    return false
  }
}

export function Link({ children, to, ...props }: LinkProps) {
  const href = typeof to === 'string' ? to : to.pathname
  if (href && isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <RouterLink to={to} {...props}>
      {children}
    </RouterLink>
  )
}
