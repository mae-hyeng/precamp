"use client"; // 리액트 구버전 방식으로 실행해달라는 명령어. (이거 없으면 useState 못씀)

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incCount = () => {
        // 1. 기본방법
        // setCount((prev) => prev + 1);

        // 2. 함수선언식
        // setCount(function (prev) {
        //     // 로직 추가 가능
        //     // ex) if() 등
        //     return prev + 1;
        // });

        // 3. 매개변수 변경 가능
        setCount((asdf) => asdf + 1);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={incCount}>카운트 올리기</button>
        </div>
    );
};

export default Counter;
