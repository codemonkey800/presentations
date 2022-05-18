import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import componentsExampleCode from 'src/code/components-example?raw'
import jsxExampleCode from 'src/code/jsx-example?raw'
import stateExampleCode from 'src/code/state-example?raw'
import { Link } from 'src/components/Link'
import { SlideItems } from 'src/components/SlideItems'

export function ReactSlides() {
  const location = useLocation()

  const sections = {
    intro: (
      <section>
        <div className="flex flex-col items-center">
          <motion.img
            animate={{ rotate: 180 }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 8 }}
            alt="react"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            width={200}
          />
          <h1 className="!text-6xl">React.js</h1>
        </div>

        <p className="!mt-10">
          A JavaScript library for building user interfaces
        </p>
      </section>
    ),

    jsx: (
      <section>
        <motion.div layout>
          <h1 className="!text-8xl">JSX</h1>

          {/#\/4\/1\/[\d]+/.exec(location.hash) && (
            <p>
              {location.hash === '#/4/1/2' && 'JSX nodes are expressions'}
              {location.hash === '#/4/1/3' &&
                'You can substitute values using mustache syntax'}
              {location.hash === '#/4/1/4' &&
                'Lists can be rendered using JS array `map()` function'}
              {location.hash === '#/4/1/5' &&
                'Fragments can render multiple nodes without a parent'}
              {location.hash === '#/4/1/6' &&
                'Styles can be passed using style object'}
              {location.hash === '#/4/1/7' && 'Or by a CSS class name'}
              {location.hash === '#/4/1/8' &&
                'Functions can be passed to event handlers'}
            </p>
          )}

          <div className="r-stack">
            <ul className="!mt-8 fragment fade-in-then-out space-y-6">
              <li>Language extension of JavaScript adding HTML-like syntax</li>
              <li>Allows us to declarative write UIs in JavaScript</li>
              <li>Combines rendering logic with UI logic</li>
            </ul>

            <pre className="!mt-8 fragment fade-in">
              <code data-line-numbers="1-41|1|3-4|6-12|15-20|22-29|31|33-41">
                {jsxExampleCode}
              </code>
            </pre>
          </div>
        </motion.div>
      </section>
    ),

    components: (
      <section>
        <motion.div layout>
          <h1 className="!text-8xl">Components</h1>

          {/#\/4\/2\/[\d]+/.exec(location.hash) && (
            <p>
              {location.hash === '#/4/2/0' &&
                'Components are units of JSX that can be reused'}
              {location.hash === '#/4/2/1' &&
                'Define a component using function declaration'}
              {location.hash === '#/4/2/2' && 'Or fat arrow syntax'}
              {location.hash === '#/4/2/3' &&
                'Pass a properties object to customize output'}
              {location.hash === '#/4/2/4' &&
                'Use JSX to render custom components'}
            </p>
          )}

          <div className="r-stack">
            <pre className="!mt-8 fragment fade-in">
              <code data-line-numbers="1-26|1-3|5|7-17|19-26">
                {componentsExampleCode}
              </code>
            </pre>
          </div>
        </motion.div>
      </section>
    ),

    state: (
      <section>
        <motion.div layout>
          <h1 className="!text-8xl">State</h1>

          {/#\/4\/3\/[\d]+/.exec(location.hash) && (
            <p>
              {location.hash === '#/4/3/0' &&
                'State is used to track data that changes over time'}
              {location.hash === '#/4/3/1' &&
                "Let's look a simple example of UI state"}
              {location.hash === '#/4/3/2' &&
                'Import `useState` hook from `react`'}
              {location.hash === '#/4/3/3' &&
                '`useState()` can be used for state read / write'}
              {location.hash === '#/4/3/4' &&
                'Nested functions can be defined for updating state'}
              {location.hash === '#/4/3/5' && 'Use the read state in some way'}
              {location.hash === '#/4/3/6' &&
                'Add event handlers for writing to the state'}

              {location.hash === '#/4/3/7' &&
                '`useEffect()` can be used for running side effects'}
              {location.hash === '#/4/3/8' && 'Import from `react` package'}
              {location.hash === '#/4/3/9' &&
                'Call `useEffect()` at top of component'}
              {location.hash === '#/4/3/10' &&
                'Perform some action in the effect'}
              {location.hash === '#/4/3/11' &&
                'Return function for cleaning up effect resources'}
              {location.hash === '#/4/3/12' &&
                'Empty dependency array means it runs once'}
              {location.hash === '#/4/3/13' &&
                'Passing a value in the array will run when it changes'}
            </p>
          )}

          <div className="r-stack">
            <pre className="!mt-8 fragment fade-in">
              <code data-line-numbers="1-38|1-13|1|4|5|9|10|15-33|15|21|22|24-26|27|29-31">
                {stateExampleCode}
              </code>
            </pre>
          </div>
        </motion.div>
      </section>
    ),

    example: (
      <section>
        <div className="flex">
          <iframe
            className="w-full h-[600px] border-0 rounded overflow-hidden"
            src="https://codesandbox.io/embed/react-example-9v49pi?fontsize=14&hidenavigation=1&module=%2Fsrc%2FExample.js&theme=dark"
            title="React Example"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        </div>
      </section>
    ),

    references: (
      <section>
        <h1 className="!text-8xl">References</h1>

        <ul className="!mt-8 space-y-6">
          <li>
            <Link to="https://reactjs.org/">React Docs</Link>
          </li>
          <li>
            <Link to="https://kentcdodds.com/blog/how-to-react">
              How to React by Kent C. Dodds
            </Link>
          </li>
          <li>
            <Link to="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">
              MDN: Getting started with React
            </Link>
          </li>
        </ul>
      </section>
    ),
  }

  return (
    <section>
      <SlideItems items={sections} />
    </section>
  )
}
