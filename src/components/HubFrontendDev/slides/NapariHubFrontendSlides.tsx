import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import tsExampleCode from 'src/code/ts-example?raw'
import { HubIcon } from 'src/components/icons'
import { SlideItems } from 'src/components/SlideItems'
import checksImage from 'src/images/checks.png'

export function NapariHubFrontendSlides() {
  const location = useLocation()

  const sections = {
    intro: (
      <section>
        <div className="flex space-x-10 justify-center items-center bg-gray-600 rounded-lg">
          <HubIcon className="w-min" />

          <span className="text-7xl">+</span>

          <img
            alt="react"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            width={250}
          />

          <span className="text-7xl whitespace-nowrap">= ❤️</span>
        </div>

        <h1 className="!text-6xl !mt-20">napari hub frontend</h1>
      </section>
    ),

    typescript: (
      <section>
        <motion.div layout>
          <h1 className="!text-8xl">TypeScript</h1>

          {/#\/5\/1\/[\d]+/.exec(location.hash) && (
            <p>
              {location.hash === '#/5/1/2' &&
                'Types can be defined when declaring a variable'}
              {location.hash === '#/5/1/3' &&
                'Types can also be inferred from the value'}
              {location.hash === '#/5/1/4' &&
                'Interfaces can be used to define structure of object'}
              {location.hash === '#/5/1/5' &&
                'Optional properties can be defined using `?`'}
              {location.hash === '#/5/1/6' &&
                'Use `type` to create type aliases'}
              {location.hash === '#/5/1/7' &&
                'Enums can be used to specify key-value constants'}
              {location.hash === '#/5/1/8' &&
                'Types can be defined on for functions'}
              {location.hash === '#/5/1/9' && 'And for classes'}
              {location.hash === '#/5/1/10' &&
                'We can use future JS syntax now'}
            </p>
          )}

          <div className="r-stack">
            <ul className="!mt-8 fragment fade-in-then-out space-y-6">
              <li>Static typing</li>
              <li>Superset of JavaScript</li>
              <li>Structural typing</li>
              <li>Transpilation of future JS features</li>
            </ul>

            <pre className="!mt-8 fragment fade-in">
              <code data-line-numbers="1-62|1-4|6-9|11-15|17-20|22-24|26-30|32-38|40-46|48-62">
                {tsExampleCode}
              </code>
            </pre>
          </div>
        </motion.div>
      </section>
    ),

    infrastructure: (
      <section>
        <motion.div layout>
          <h1 className="!text-8xl">Infrastructure</h1>
          {/#\/5\/2\/[\d]+/.exec(location.hash) && (
            <h2 className="text-left !ml-40 !-mt-5 !text-2xl !text-gray-300">
              {location.hash === '#/5/2/0' && 'Next.js'}
              {location.hash === '#/5/2/1' && 'Bundling'}
              {location.hash === '#/5/2/2' && 'Transpilation'}
              {location.hash === '#/5/2/3' && 'Dependency Management'}
            </h2>
          )}

          <div className="r-stack">
            <div className="fragment fade-in-then-out">
              <ul>
                <li>React Framework</li>
                <li>Server Side Rendering (SSR)</li>
                <li>File based routing</li>
                <li>Minimal configuration</li>
              </ul>

              <div className="flex justify-center">
                <img
                  alt="nextjs"
                  className="bg-white"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png"
                  width="400"
                />
              </div>
            </div>

            <div className="fragment fade-in-then-out">
              <p className="text-4xl">
                Compiles HTML, CSS, and JS assets into bundles
              </p>

              <div className="flex justify-center">
                <img
                  alt="webpack-bundler"
                  className="bg-white"
                  src="https://www.phase2technology.com/sites/default/files/migrated-page-files/www.phase2technology.com/sites/default/files/inline-images/webpack1-1024x512.png"
                  width="600"
                />
              </div>
            </div>

            <div className="fragment fade-in-then-out">
              <ul>
                <li>TypeScript → JavaScript</li>
                <li>SCSS → CSS</li>
              </ul>

              <div className="flex justify-center">
                <img
                  alt="transpiler"
                  className="bg-white"
                  src="https://miro.medium.com/max/1200/1*G9cxwM-sZtK-LZjRq7Ii1g.png"
                  width="500"
                />
              </div>
            </div>

            <div className="fragment fade-in-then-out">
              <ul>
                <li>Yarn for npm dependencies</li>
                <li>Lock file for reproducible installations</li>
                <li>Dependabot for automated upgrades</li>
              </ul>

              <div className="flex justify-center">
                <img
                  alt="yarn-package-manager"
                  className="bg-white"
                  src="https://www.addictivetips.com/app/uploads/2020/03/yarn.png"
                  width="500"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    ),

    devEx: (
      <section>
        <motion.div layout>
          <h1 className="!text-6xl">Developer Experience</h1>
          {/#\/5\/3\/[\d]+/.exec(location.hash) && (
            <h2 className="text-left !ml-40 !-mt-5 !text-2xl !text-gray-300">
              {location.hash === '#/5/3/0' && 'Fast Refresh'}
              {location.hash === '#/5/3/1' && 'Linting'}
              {location.hash === '#/5/3/2' && 'Type Checking'}
            </h2>
          )}

          <div className="r-stack">
            <div className="fragment fade-in-then-out">
              <p className="text-2xl">
                Reload code as its changed in ⚡ ️speed
              </p>

              <iframe
                className="w-[800px] h-[400px] border-0 rounded overflow-hidden"
                src="https://codesandbox.io/embed/nextjs-5tlgz?fontsize=14&hidenavigation=1&theme=dark&view=both"
                title="Next.js"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              />
            </div>

            <div className="fragment fade-in-then-out">
              <ul>
                <li>ESLint: JS/TS</li>
                <li>Stylelint: SCSS and CSS</li>
                <li>Prettier: Formatter for HTML, CSS, and JS</li>
              </ul>

              <div className="flex justify-center">
                <img
                  alt="linter"
                  className="bg-white"
                  src="https://www.freecodecamp.org/news/content/images/2019/10/lint-with-import-errors.jpg"
                  width="700"
                />
              </div>
            </div>

            <div className="fragment fade-in-then-out">
              <p className="text-5xl">Type checking with TypeScript</p>

              <div className="flex justify-center">
                <img
                  alt="type-checking"
                  className="bg-white"
                  src="https://i.stack.imgur.com/Y2VvL.png"
                  width="700"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    ),

    testing: (
      <section>
        <div>
          <h1 className="!text-8xl">Testing</h1>

          <div className="r-stack">
            <ul className="!mt-8 fragment fade-in-then-out space-y-6">
              <li>Unit / Integration</li>
              <li>Snapshot</li>
              <li>E2E</li>
              <li>QA</li>
            </ul>
          </div>
        </div>
      </section>
    ),

    cicd: (
      <section>
        <motion.div layout>
          <h1 className="!text-6xl">Continuous Integration </h1>
          {/#\/5\/5\/[\d]+/.exec(location.hash) && (
            <h2 className="text-left !ml-[140px] !-mt-5 !text-2xl !text-gray-300">
              {location.hash === '#/5/5/0' && 'GitHub Actions + Checks'}
              {location.hash === '#/5/5/1' && 'Docker'}
              {location.hash === '#/5/5/2' && 'AWS'}
            </h2>
          )}

          <div className="r-stack">
            <div className="fragment fade-in-then-out">
              <ul>
                <li>GitHub Actions for building and deploying code</li>
                <li>GitHub Checks for blocking PRs</li>
              </ul>

              <div className="flex justify-center">
                <img
                  alt="github-checks"
                  className="bg-white"
                  src={checksImage}
                  width="700"
                />
              </div>
            </div>

            <div className="fragment fade-in-then-out">
              <p className="text-5xl">
                Docker for building reproducible images
              </p>

              <div className="flex justify-center">
                <img
                  alt="type-checking"
                  className="bg-white"
                  src="https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png"
                  width="700"
                />
              </div>
            </div>

            <div className="fragment fade-in-then-out">
              <ul>
                <li>AWS for hosting our website</li>
                <li>ECR for hosting containers</li>
              </ul>

              <div className="flex justify-center">
                <img
                  alt="aws"
                  className="bg-white"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/800px-Amazon_Web_Services_Logo.svg.png"
                  width="400"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    ),
  }

  return (
    <section>
      <SlideItems items={sections} />
    </section>
  )
}
