// Basic Types
let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple (assignement should be in the same order as the array declared types)
let person: [number, string, boolean] = [1, 'Steven', false]

// Tuple Array(still a tuple that take's in arraylist)
let employee: [number, string][]

employee = [
    [1, 'brad'],
    [2, 'john'],
    [3,'jill'],
]

// Union which will allow combination of different types for a single variable(interchangable types)
let pid: string | number = 22

// Enum allows us to define a set of named constants either numeric or string
enum Directions1{
    Up = 1,
    Down,
    Left,
    Right,
}

enum Directions2{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

// Objects
type User = {
    id: number
    name: string
}
const user : User = {
    id: 1,
    name: 'john',
}

// Type Assertion to treat an entity as a different type
let cid: any = 1
//let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number{
    return x + y
}

function log(message: string | number): void{
    console.log(message)
}

// Interfaces
interface UserInterface {
    readonly id: number
    name: string
    //age variable is optional in the implementation of this interface
    age?: number
}
const user1 : UserInterface = {
    id: 1,
    name: 'john',
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

//Interface to use on below class
interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes
class Person implements PersonInterface{
    //accessible in this class only
    //private id: number
    //accessible in this class or extended class from this class only
    //protected id: number
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered.`
    }
}

const brad = new Person(1, 'Brad')
const mike = new Person(2, 'Mike')

//Subclass
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'David', 'Developer')

//Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['David', 'John', 'Jill'])

numArray.push(1)