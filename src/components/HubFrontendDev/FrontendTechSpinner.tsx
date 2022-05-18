import {
  DiCss3 as CssIcon,
  DiHtml5 as HtmlIcon,
  DiJavascript as JavaScriptIcon,
} from 'react-icons/di'
import { useLocation } from 'react-router-dom'

import { StaggerList } from 'src/components/StaggerList'

interface Props {
  className?: string
}

export function FrontendTechSpinner({ className }: Props) {
  const location = useLocation()

  return (
    <StaggerList
      className={className}
      items={[HtmlIcon, CssIcon, JavaScriptIcon]}
      visible={location.hash === '#/3' || location.hash.startsWith('#/3/0')}
    />
  )
}
