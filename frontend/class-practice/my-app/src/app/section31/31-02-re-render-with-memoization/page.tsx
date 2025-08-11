"use client";

import { useCallback, useMemo, useState } from "react";

export default function ReRenderPage() {
    console.log("컴포넌트 렌더링 됨");

    let countLet = 0;
    const [countState, setCountState] = useState(0);

    // 1. 변수 기억 방법 => useMemo
    // const aaa = Math.random();
    // console.log(aaa);
    const aaa = useMemo(() => Math.random(), []);
    console.log(aaa);

    // 2. 함수 기억 방법 => useCallback
    const onClickCountLet = useCallback(() => {
        console.log(countLet + 1);
        countLet += 1;
    }, []);

    // 3. useCallback 주의사항 => state까지 기억됨
    const onClickCountState = useCallback(() => {
        // console.log(countState + 1);
        // setCountState(countState + 1); // countState까지 메모돼서 state + 1이 안됨
        // 해결방법
        setCountState((prev) => prev + 1);
    }, []);

    return (
        <>
            <div>카운트(let) : {countLet}</div>
            <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>
            <br />
            <div>카운트(state) : {countState}</div>
            <button onClick={onClickCountState}>카운트(state) +1 올리기</button>
        </>
    );
}
