"use client"; // 리액트 구버전 방식으로 실행해달라는 명령어. (이거 없으면 useState 못씀)

import { useState } from "react";

const Counter = () => {
    const result = useState(0);

    const incCount = () => {
        result[1](result[0] + 1);
    };

    const decCount = () => {
        result[1](result[0] - 1);
    };

    return (
        <div>
            <div>{result[0]}</div>
            <button onClick={incCount}>카운트 올리기</button>
            <br />
            <button onClick={decCount}>카운트 내리기</button>
        </div>
    );
};

export default Counter;
