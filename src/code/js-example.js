// Variables
const x = 1

let y = 2
y += 5

// Functions
function add(a, b) {
  return a + b
}

const sub = (a, b) => a - b

// Conditionals
if (x === 0) {
  console.log(x)
} else if (y !== 10) {
  console.log(y)
} else {
  console.log(x + y)
}

const key = '...'
switch (key) {
  case 'key1':
    // handle key1
    break

  case 'key2':
    // handle key2
    break

  default:
    // handle no match
    break
}

// Loops
for (let i = 0; i < 10; i++) {
  // do operation
}

const data = [1, 2, 3, 4]
for (const value of data) {
  // do operation
}

const iterator = {
  get value() {
    // return value
  },

  get hasNext() {
    // return if has next
  },
}

while (iterator.hasNext) {
  console.log(iterator.value)
}

// Data Structures
const arrayData = [
  1,
  2,
  3,
  null,
  undefined,
  'key1',
  {
    data: 12,
  },
]

const objectData = {
  number: 1,
  string: 'key1',
  null: null,
  undefinedKey: undefined,
  array: [1, 2, 3],
  object: {
    key1: 1,
    key2: 2,
  },
}

const set = new Set([1, 2, 3])
set.add(4)
if (set.has(4)) {
  set.delete(4)
}

const map = new Map([
  ['key1', 1],
  ['key2', 2],
])
map.set('key3', 3)
if (map.has('key4')) {
  map.delete('key4')
}

class Logger {
  constructor(name) {
    this.name = name
  }

  log(message) {
    console.log(`[${this.name}]`, message)
  }
}

const logger = new Logger('my-logger')
logger.log('this is my log')
