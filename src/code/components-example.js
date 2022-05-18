function HelloWorld() {
  return <h1>Hello, World!</h1>
}

const HelloWorld2 = () => <h1>Hello, World!</h1>

function HelloWorldName({ age, name, shout = false }) {
  const end = shout ? '!' : '.'

  return (
    <h1>
      Hello, {name}
      {end} You are age {age}
      {end}
    </h1>
  )
}

const nodes = (
  <>
    <HelloWorld />
    <HelloWorld2 />
    <HelloWorldName name="Foo" age={20} shout={false} />
    <HelloWorldName name="Bar" age={10} shout />
  </>
)
