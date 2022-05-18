import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(prev => prev + 1)

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  )
}

import { useEffect } from 'react'

function TimerCount() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(prev => prev + 1)

  useEffect(() => {
    const intervalID = setInterval(increment, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  useEffect(() => {
    // do something with count
  }, [count])

  return (
    <>
      <p>Count: {count}</p>
    </>
  )
}
