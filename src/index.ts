let age: number = 5;

let names: string[] = ["Joe", "Adam"];

//Tupla
let person: [number, string] = [1, "Jane"];
let people: [number, string][] = [person, [2, "Joe"]];

//Intersection
const value: number | string | boolean = 1;

//Enum
enum Direction {
  UP = 1,
  DOWN = 2,
}

let d = Direction.DOWN;

//Type assertion
let productName: any = "Boné";
let itemName1 = productName as string;
let itemName2 = <string>productName;
