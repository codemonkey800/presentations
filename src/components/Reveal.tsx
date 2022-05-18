import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/night.css'
import 'reveal.js/plugin/highlight/monokai.css'

import clsx from 'clsx'
import { useAtom } from 'jotai'
import { ReactNode, useEffect } from 'react'
import RevealJS from 'reveal.js'
// eslint-disable-next-line import/extensions
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js'

import { slideState } from 'src/state'

interface Props {
  children: ReactNode
}

export function Reveal({ children }: Props) {
  const [slide, setSlide] = useAtom(slideState)

  useEffect(() => {
    const reveal = new RevealJS({
      plugins: [Highlight],
      history: true,
      navigationMode: 'linear',
    })
    reveal.initialize()

    reveal.on('slidechanged', event =>
      setSlide({
        indexh: event.indexh,
        indexv: event.indexv,
      }),
    )
  }, [setSlide])

  return (
    <div
      className={clsx(
        'h-screen transition-colors',
        `reveal-indexh-${slide.indexh}`,
        `reveal-indexv-${slide.indexv}`,
        slide.indexh === 1 ? 'bg-[#80d1ff]' : 'bg-[#111]',
      )}
    >
      <div className="reveal">
        <div className="slides">{children}</div>
      </div>
    </div>
  )
}
