const TypescriptExample = () => {
    // 타입추론
    let aaa = "hi";
    aaa = 3;

    // 타입명시
    let bbb: string = "hi";
    bbb = 3;

    // 타입명시가 필요한 상황. 모든 경우에 명시하지 않음
    let ccc: number | string = 1000; // 이런식으로 | 을 활용해서 number, string 모두 가능하게 가능
    ccc = "1000원";

    let ddd: number = 10;
    ddd = "철수";

    // boolean 타입
    let eee: boolean = true;
    eee = false;
    eee = "false"; // true로 작동함

    // 배열타입
    let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"];
    let ggg: string[] = ["철수", "영희", "훈이"];
    let hhh: (string | number)[] = [1, 2, 3, 4, 5, "안녕하세요"]; // 타입을 추론해서 어떤 타입인지 역으로 알아낼 수 있음

    // 객체타입
    interface myType {
        name: string;
        age: number | string;
        school: string;
        hobby?: string; // ? 는 있어도 되고 없어도 된다 라는 의미
    }

    const profile: myType = {
        name: "철수",
        age: 8,
        school: "다람쥐 초등학교",
    };

    profile.name = "훈이";
    profile.age = "8살";
    profile.school = "공룡초등학교";
    profile.hobby = "수영";

    // 함수타입 => 함수는 몇번이든 호출 가능하므로, 타입추론 안됨(타입 명시하기)
    function add(num1: number, num2: number, unit: string): string {
        return num1 + num2 + unit;
    }

    const result = add(1000, 2000, "원"); // 결과의 리턴 타입도 알 수 있음

    const add2 = (num1: number, num2: number, unit: string): string => {
        return num1 + num2 + unit;
    };

    const result2 = add(1000, 2000, "원"); // 결과의 리턴 타입도 알 수 있음

    // any타입
    let qqq: any = "철수"; // 자바스크립트와 동일. 가급적 any는 사용하지 않는게 좋다.
    qqq = 123;
    qqq = true;

    return <></>;
};
