const returnValue = <T>(value: T) => value;

const v1 = returnValue<string>("a");
const v2 = returnValue<number>(1);

//Promises
const promiseReturn = async <T>(value: T): Promise<T> => {
  return value;
};

const valuePromise = promiseReturn<string>("oi");
