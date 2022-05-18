import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import napariExampleCode from 'src/code/napari-example.py?raw'

export function TraditionalUISlide() {
  const location = useLocation()

  return (
    <section>
      <motion.div layout>
        <h1 className="!text-8xl">Traditional UIs</h1>

        {/#\/2\/0\/[\d]+/.exec(location.hash) && (
          <p>
            {location.hash === '#/2/0/1' && 'napari example - qt_about.py'}
            {location.hash === '#/2/0/2' && 'Layout and label is created'}
            {location.hash === '#/2/0/3' && 'New buttons and layout type'}
            {location.hash === '#/2/0/4' && 'Mutations on text box'}
            {location.hash === '#/2/0/5' &&
              'Imperative == creating + mutating UI directly'}
            {location.hash === '#/2/0/6' && 'Set widget layout to render UI'}
          </p>
        )}

        <div className="r-stack">
          <ul className="!mt-8 fragment fade-in-then-out space-y-6">
            <li>Imperative: UI components are created and mutated</li>
            <li>Does not convey structure of resulting UI</li>
            <li>Need to handle state changes and re-rendering</li>
          </ul>

          <pre className="!mt-8 fragment fade-in">
            <code data-line-numbers="1-43|4-13|16-25|27-31|33-40|42">
              {napariExampleCode}
            </code>
          </pre>
        </div>
      </motion.div>
    </section>
  )
}
