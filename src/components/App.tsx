import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useTitle } from 'src/hooks/useTitle'

import { HubFrontendDev } from './HubFrontendDev'
import { Link } from './Link'

function Links() {
  useTitle('Presentations')

  return (
    <main className="flex h-screen p-12">
      <div className="flex flex-col space-y-6 text-white">
        <h1 className="text-5xl">Presentations</h1>

        <Link className="hover:underline" to="/hub-frontend-dev">
          Hub Frontend Development
        </Link>
      </div>
    </main>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="/hub-frontend-dev" element={<HubFrontendDev />} />
      </Routes>
    </BrowserRouter>
  )
}
