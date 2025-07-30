// 1. 문자/숫자/불린(primitive) 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("철수", 123, true);

// 2. any 타입 => 그냥 자바스크립트랑 같음
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000); // "철수" * 1000 은 안되는데 오류 인식 안됨.
  return [arg3, arg2, arg1];
};

const result2 = getAny("철수", 123, true);

// 3. unknown 타입
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result3 = getUnknown("철수", 123, true);

// 4. generic 타입
const getGeneric = <myType1, myType2, myType3>(arg1: myType1, arg2: myType2, arg3: myType3): [myType3, myType2, myType1] => {
  return [arg3, arg2, arg1];
};

const result4 = getGeneric("철수", 123, true);

// 5. generic 타입 => 짧게
const getGeneric2 = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] => {
  return [arg3, arg2, arg1];
};

const result5 = getGeneric2("철수", 123, true); // any 처럼 아무 타입이나 입력 가능하고, 반환 타입 예측까지 가능하다.

// 6. generic 타입 => 더 짧게
const getGeneric3 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result6 = getGeneric3("철수", 123, true); // any 처럼 아무 타입이나 입력 가능하고, 반환 타입 예측까지 가능하다.

// 7. generic 타입 => 함수선언식
function getGeneric4<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result7 = getGeneric4<string, number, boolean>("철수", 123, true); // any 처럼 아무 타입이나 입력 가능하고, 반환 타입 예측까지 가능하다.
