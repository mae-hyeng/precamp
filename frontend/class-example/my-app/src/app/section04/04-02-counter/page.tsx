"use client"; // 리액트 구버전 방식으로 실행해달라는 명령어. (이거 없으면 useState 못씀)

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incCount = () => {
        setCount(count + 1);
    };

    const decCount = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={incCount}>카운트 올리기</button>
            <button onClick={decCount}>카운트 내리기</button>
        </div>
    );
};

export default Counter;
