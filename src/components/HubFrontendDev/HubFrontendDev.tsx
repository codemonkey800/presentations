import { QueryClient, QueryClientProvider } from 'react-query'

import { Reveal } from 'src/components/Reveal'
import { useTitle } from 'src/hooks/useTitle'

import { HubFrontendDevSlides } from './HubFrontendDevSlides'

const queryClient = new QueryClient()

export function HubFrontendDev() {
  useTitle('Developing Frontend Applications')

  return (
    <QueryClientProvider client={queryClient}>
      <Reveal>
        <HubFrontendDevSlides />
      </Reveal>
    </QueryClientProvider>
  )
}
