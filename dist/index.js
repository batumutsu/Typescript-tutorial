"use strict";
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple (assignement should be in the same order as the array declared types)
let person = [1, 'Steven', false];
// Tuple Array(still a tuple that take's in arraylist)
let employee;
employee = [
    [1, 'brad'],
    [2, 'john'],
    [3, 'jill'],
];
// Union which will allow combination of different types for a single variable(interchangable types)
let pid = 22;
// Enum allows us to define a set of named constants either numeric or string
var Directions1;
(function (Directions1) {
    Directions1[Directions1["Up"] = 1] = "Up";
    Directions1[Directions1["Down"] = 2] = "Down";
    Directions1[Directions1["Left"] = 3] = "Left";
    Directions1[Directions1["Right"] = 4] = "Right";
})(Directions1 || (Directions1 = {}));
var Directions2;
(function (Directions2) {
    Directions2["Up"] = "Up";
    Directions2["Down"] = "Down";
    Directions2["Left"] = "Left";
    Directions2["Right"] = "Right";
})(Directions2 || (Directions2 = {}));
const user = {
    id: 1,
    name: 'john',
};
// Type Assertion to treat an entity as a different type
let cid = 1;
//let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'john',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike');
//Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'David', 'Developer');
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['David', 'John', 'Jill']);
numArray.push(1);
