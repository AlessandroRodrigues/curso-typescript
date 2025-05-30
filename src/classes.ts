interface IPerson {
  age: number;
  name: string;
  sayMyName(): string;
}

class Person implements IPerson {
  readonly age: number;
  name: string;
  protected salary: number;
  private country: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
    this.salary = 1000;
    this.country = "Brazil";
  }

  sayMyName() {
    return this.name;
  }
}

//Simplificação
class PersonCustom {
  constructor(age: number, name: string, salary: number, country: string) {}
}

const p = new Person(40, "Joe");
p.sayMyName();
