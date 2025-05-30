"use strict";
let age = 5;
let names = ["Joe", "Adam"];
//Tupla
let person = [1, "Jane"];
let people = [person, [2, "Joe"]];
//Intersection
const value = 1;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 1] = "UP";
    Direction[Direction["DOWN"] = 2] = "DOWN";
})(Direction || (Direction = {}));
let d = Direction.DOWN;
//Type assertion
let productName = "Boné";
let itemName1 = productName;
let itemName2 = productName;
