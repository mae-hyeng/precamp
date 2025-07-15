"use client"; // 리액트 구버전 방식으로 실행해달라는 명령어. (이거 없으면 useState 못씀)

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incCount = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // 위 코드는 최종적으로 0 + 1 만 실행됨. 기댓값은 5이지만 그게 아님

        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        // 위 코드는 임시로 저장되어 있는 공간에서 count 변수를 가져오기 때문에 함수 만큼 count가 증가 됨
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
