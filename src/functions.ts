const sum = (x: number, y: number) => {
  return x + y;
};

const total = sum(1, 2);

// Implementar interface
interface MathFunc {
  (x: number, y: number): number;
}

let soma: MathFunc = (x: number, y: number) => {
  return x + y;
};
