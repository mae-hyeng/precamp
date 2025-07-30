interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
}

// 1. Partial 타입
type aaa = Partial<IProfile>;

// 2. Required 타입
type bbb = Required<IProfile>;

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입
type ddd = Omit<IProfile, "school">;

// 5. Union 타입
type eee = "철수" | "영희" | "훈이";
const child1: eee = "훈이"; // 철수, 영희, 훈이만 들어갈 수 있음
const child2: string = "사과"; // 철수, 영희, 훈이 뿐만 아니라 string 타입 전부 가능

// 6. 조합하기
type fff = Record<eee, IProfile>;

// 7. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby" 와 같음
const myProfile: ggg = "age";

// 8. type과 interface 차이
// interface는 선언한 것들을 병합 가능(선언 병합)
interface IProfile {
    candy: number;
}

const qqq: IProfile = {
    name: "철수",
    candy: 3,
    // ...
};

// 9. 배운것들 응용
const profile: Partial<IProfile> = {
    candy: 10,
};
