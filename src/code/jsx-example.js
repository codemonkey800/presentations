const hello = <h1>Hello, World!</h1>

const myName = 'Foo'
const helloName = <p>Hello, {myName}!</p>

const items = [1, 2, 3, 4]
const helloList = (
  <ul>
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

const fragment = (
  <>
    <p>This is a fragment</p>
    <p>No additional node is created</p>
  </>
)

const styleNode = (
  <div
    style={{
      width: 100,
      height: 100,
    }}
  />
)

const classNode = <div className="w-full h-full" />

const eventHandlerNode = (
  <button
    onClick={() => {
      alert('clicked')
    }}
  >
    Click
  </button>
)
