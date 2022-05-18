const num: number = 10
const str: string = 'hello'
const arr: number[] = [1, 2, 3]
const obj: Record<string, number> = { a: 1, b: 2, c: 3 }

const inferNum = 10
const inferStr = 'hello'
const inferArr = [1, 2, 3]
const inferObj = { a: 1, b: 2, c: 3 }

interface ObjectType {
  a: number
  b: number
  c: number
}

interface OptionalProps {
  a: number
  b?: number
}

type Num = number
type Keys = 'key1' | 'key2' | 'key3'
type Callback = (value: number) => string

enum Key {
  Key1 = 'key1',
  Key2 = 'key2',
  Key3 = 'key3',
}

function add(a: number, b: number): number {
  return a + b
}

function div(a: number, b: number): string {
  return (a / b).toFixed(2)
}

class Logger {
  constructor(private name: string) {}

  log<T>(message: T): void {
    console.log(`[${this.name}]`, message)
  }
}

class UserView {
  private user?: User

  @inject(UserService)
  constructor(private userService: UserService) {}

  async login(): Promise<void> {
    this.user = await this.userService.login()
  }

  async logout(): Promise<void> {
    await this.userService.logout()
    this.user = undefined
  }
}
