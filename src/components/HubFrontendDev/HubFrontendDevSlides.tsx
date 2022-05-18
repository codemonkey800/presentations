import { useMemo } from 'react'
import { DiGithubAlt as GithubIcon } from 'react-icons/di'

import { Link } from 'src/components/Link'
import { SlideItems } from 'src/components/SlideItems'

import { FrontendDevSlide } from './slides/FrontendDevSlide'
import { IntroSlide } from './slides/IntroSlide'
import { KeyTakeawaysSlide } from './slides/KeyTakeawaysSlide'
import { NapariHubFrontendSlides } from './slides/NapariHubFrontendSlides'
import { NapariViewerAndHubSlide } from './slides/NapariViewerAndHubSlide'
import { ReactSlides } from './slides/ReactSlides'
import { TraditionalUISlide } from './slides/TraditionalUISlide'

export function HubFrontendDevSlides() {
  const slides = useMemo(
    () => ({
      intro: <IntroSlide />,
      napariViewerAndHub: <NapariViewerAndHubSlide />,
      traditionalUIs: <TraditionalUISlide />,
      frontendDev: <FrontendDevSlide />,
      react: <ReactSlides />,
      napariHubFrontend: <NapariHubFrontendSlides />,
      keyTakeaways: <KeyTakeawaysSlide />,
      qa: (
        <section>
          <h1 className="!text-8xl">Thank you!</h1>
          <h2 className="!text-6xl !mt-20">Q/A</h2>
        </section>
      ),
      seeHowItsCreated: (
        <section>
          <div className="flex flex-col items-center  ">
            <h1 className="!text-5xl">See how this presentation was created</h1>

            <Link
              className="text-3xl flex items-center"
              to="https://github.com/codemonkey800/presentations"
            >
              <GithubIcon className="w-min" size={64} />
              <span>codemonkey800/presentations</span>
            </Link>
          </div>
        </section>
      ),
    }),
    [],
  )

  return <SlideItems items={slides} />
}
