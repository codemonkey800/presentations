import axios, { AxiosError } from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import { isArray, shuffle } from 'lodash'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { PluginIndexData } from 'src/types/plugin'

const PLUGIN_SHOWCASE_MAX = 3

export function PluginShowcase() {
  const [page, setPage] = useState(0)
  const { data: plugins } = useQuery<PluginIndexData[], AxiosError>(
    'hub-api-plugins',
    async () => {
      const response = await axios.get<PluginIndexData[]>(
        'https://api.napari-hub.org/plugins/index',
      )

      return shuffle(response.data)
    },
  )

  useEffect(() => {
    let intervalID: number | undefined

    if (plugins) {
      intervalID = window.setInterval(() => {
        setPage(current => {
          const next = current + 1
          if (next > plugins.length) {
            return 0
          }

          return next
        })
      }, 2500)
    }

    return () => {
      window.clearInterval(intervalID)
    }
  }, [plugins])

  return (
    <AnimatePresence>
      <motion.div
        key={String(page)}
        className="flex space-x-6 justify-between absolute w-full"
        initial={{ y: '50%', opacity: 0 }}
        exit={{ y: '-50%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {plugins
          ?.slice(page * PLUGIN_SHOWCASE_MAX, (page + 1) * PLUGIN_SHOWCASE_MAX)
          ?.map(plugin => (
            <div
              key={plugin.name}
              className="bg-gray-100 p-1 shadow-lg text-black w-full min-h-28"
            >
              <p className="text-xl font-semibold">{plugin.name}</p>
              <p className="text-xl !mt-5">
                <span>By </span>
                <span>
                  {isArray(plugin.authors)
                    ? plugin.authors.map(author => author.name).join(', ')
                    : ''}
                </span>
              </p>
            </div>
          ))}
      </motion.div>
    </AnimatePresence>
  )
}
