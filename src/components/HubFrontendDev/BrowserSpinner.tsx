import {
  DiChrome as ChromeIcon,
  DiFirefox as FirefoxIcon,
  DiOpera as OperaIcon,
  DiSafari as SafariIcon,
} from 'react-icons/di'
import { FaEdge as EdgeIcon } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

import { StaggerList } from 'src/components/StaggerList'

export function BrowserSpinner() {
  const location = useLocation()

  return (
    <StaggerList
      items={[ChromeIcon, FirefoxIcon, EdgeIcon, OperaIcon, SafariIcon]}
      visible={location.hash === '#/3/1/0'}
    />
  )
}
