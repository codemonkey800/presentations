import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import cssExamleCode from 'src/code/css-example.css?raw'
import htmlExampleCode from 'src/code/html-example.html?raw'
import jsExample from 'src/code/js-example?raw'
import { BrowserSpinner } from 'src/components/HubFrontendDev/BrowserSpinner'
import { FrontendTechSpinner } from 'src/components/HubFrontendDev/FrontendTechSpinner'
import { Link } from 'src/components/Link'
import { SlideItems } from 'src/components/SlideItems'

export function FrontendDevSlide() {
  const location = useLocation()

  const sections = {
    intro: (
      <section>
        <h1 className="!text-6xl">Frontend</h1>

        <div className="flex justify-center">
          <FrontendTechSpinner className="flex my-6 space-x-32" />
        </div>

        <div className="grid grid-cols-[1fr,1fr] gap-x-4">
          <p className="fragment fade-in text-right">HTML</p>
          <p className="fragment fade-in text-left">= Markup</p>

          <p className="fragment fade-in text-right">CSS</p>
          <p className="fragment fade-in text-left">= Styling</p>

          <p className="fragment fade-in text-right">JavaScript</p>
          <p className="fragment fade-in text-left">= Scripting</p>
        </div>
      </section>
    ),

    html: (
      <section>
        <motion.div layout>
          <h1 className="!text-8xl">HTML</h1>

          {/#\/3\/1\/[\d]+/.exec(location.hash) && (
            <p>
              {location.hash === '#/3/1/2' &&
                'Hint to browser on expected HTML version'}
              {location.hash === '#/3/1/3' && 'Root element '}
              {location.hash === '#/3/1/4' && 'Metadata for HTML document'}
              {location.hash === '#/3/1/5' &&
                'CSS can be imported using the `<link>` tag'}
              {location.hash === '#/3/1/6' &&
                'Body tag for rendering the UI and importing JS'}
              {location.hash === '#/3/1/7' && 'Structure of HTML UI'}
              {location.hash === '#/3/1/8' &&
                'JS can be imported using the `<script>`'}
            </p>
          )}

          <div className="r-stack">
            <ul className="!mt-8 fragment fade-in-then-out space-y-6">
              <li>XML like language</li>
              <li>Used to create structure of UI</li>
              <li className="!mb-16">Declarative: Browser handles rendering</li>

              <BrowserSpinner />
            </ul>

            <pre className="!mt-8 fragment fade-in">
              <code data-line-numbers="1-16|1|2|3-8|6|10-16|11-12|14">
                {htmlExampleCode}
              </code>
            </pre>
          </div>
        </motion.div>
      </section>
    ),

    css: (
      <section>
        <motion.div layout>
          <h1 className="!text-8xl">CSS</h1>

          {/#\/3\/2\/[\d]+/.exec(location.hash) && (
            <p>
              {location.hash === '#/3/2/2' &&
                'Styles can be applied for elements'}
              {location.hash === '#/3/2/3' &&
                'It works for multiple elements too'}
              {location.hash === '#/3/2/4' &&
                'You can specify classes to re-use styles'}
              {location.hash === '#/3/2/5' &&
                'Or you can use an ID to define a single class'}
            </p>
          )}

          <div className="r-stack">
            <ul className="!mt-8 fragment fade-in-then-out space-y-6">
              <li>Language for styling presentation of HTML</li>
              <li>Handles spacing, coloring, dimensions, and typgoraphy</li>
              <li>
                Cascading: Styles can be applied to an entire HTML tree +
                descendants
              </li>
            </ul>

            <pre className="!mt-8 fragment fade-in">
              <code data-line-numbers="1-20|1-5|7-10|13-14|16-19">
                {cssExamleCode}
              </code>
            </pre>
          </div>
        </motion.div>
      </section>
    ),

    js: (
      <section>
        <motion.div layout>
          <h1 className="!text-8xl">JavaScript</h1>

          {/#\/3\/3\/[\d]+/.exec(location.hash) && (
            <p>
              {location.hash === '#/3/3/2' &&
                'Constant variables can be defined using `const`'}
              {location.hash === '#/3/3/3' &&
                'But if you want to modify the variable, use `let`'}
              {location.hash === '#/3/3/4' &&
                'You can declare functions using the `function` keyword'}
              {location.hash === '#/3/3/5' &&
                'Or you can use the more compact fat arrow function'}
              {location.hash === '#/3/3/6' &&
                'Conditionals work the same as other C-like languages'}
              {location.hash === '#/3/3/7' && 'And so do switch statements'}
              {location.hash === '#/3/3/8' && 'And for loops'}
              {location.hash === '#/3/3/9' &&
                'You can also iterate through collections using `for of`'}
              {location.hash === '#/3/3/10' &&
                'Or you can use a while loop instead'}
              {location.hash === '#/3/3/11' &&
                'Arrays can be defined using `[]`'}
              {location.hash === '#/3/3/12' &&
                'Objects can be defined using `{}`'}
              {location.hash === '#/3/3/13' &&
                'Sets can be used for checking existence'}
              {location.hash === '#/3/3/14' &&
                'And maps can be used for key-value pairs'}
              {location.hash === '#/3/3/15' &&
                'Or create your own data structure using `class`'}
            </p>
          )}

          <div className="r-stack">
            <ul className="!mt-8 fragment fade-in-then-out space-y-6">
              <li>Programming language for the web</li>
              <li>
                Used to add interactivity and application-like features to a
                website
              </li>
              <li>
                Interacts with browser through the Document Object-Model (DOM)
                API
              </li>
            </ul>

            <pre className="!mt-8 fragment fade-in">
              <code
                data-line-numbers={[
                  '1-113',
                  '2',
                  '4-5',
                  '8-10',
                  '12',
                  '15-21',
                  '23-36',
                  '39-41',
                  '43-46',
                  '48-60',
                  '63-73',
                  '75-85',
                  '87-91',
                  '93-100',
                  '102-113',
                ].join('|')}
              >
                {jsExample}
              </code>
            </pre>
          </div>
        </motion.div>
      </section>
    ),

    example: (
      <section>
        j{' '}
        <iframe
          width="100%"
          height="600"
          scrolling="no"
          title="Untitled"
          src="https://codepen.io/codemonkey800/embed/eYVvXxz?default-tab=html%2Cresult&editable=true&theme-id=dark"
          frameBorder="no"
          loading="lazy"
          allowTransparency
        >
          See the Pen{' '}
          <a href="https://codepen.io/codemonkey800/pen/eYVvXxz">Untitled</a> by
          Jeremy Asuncion (
          <a href="https://codepen.io/codemonkey800">@codemonkey800</a>) on{' '}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </section>
    ),

    references: (
      <section>
        <h1 className="!text-8xl">References</h1>

        <ul className="!mt-8 space-y-6">
          <li>
            <Link to="https://developer.mozilla.org/en-US/docs/Learn">
              MDN: Learn web development
            </Link>
          </li>
          <li>
            <Link to="https://web.dev/learn">web.dev: Learn</Link>
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
