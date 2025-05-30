//Type

type User = {
  name: string;
  age: number;
  email?: string;
};

let user: User = {
  age: 40,
  name: "Joe",
};

const printLog = (message: string) => {
  console.log(message);
};

// ! para propriedades opcionais
printLog(user.email!);
//saída -> undefined

//Unions

type Author = {
  books: string[];
  register(): string;
};

const author: Author & User = {
  age: 30,
  name: "Mary",
  books: ["The Legend"],
  register() {
    return "123";
  },
};

// Interfaces

interface AuthorI {
  readonly name: string;
  age: number;
}

let a: AuthorI = {
  name: "Joe",
  age: 20,
};

//Erro
//a.name = 'Mark';
