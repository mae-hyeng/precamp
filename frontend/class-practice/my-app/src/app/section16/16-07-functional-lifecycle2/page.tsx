"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage() {
    const [count, setCount] = useState(1);

    // 1. useEffect 하나로 합치기
    useEffect(() => {
        console.log("그려지고 나서 실행");

        return () => {
            console.log("사라지기 전에 실행");
        };
    }, []);

    // 2. useEffect 잘못된 사용법 (1. 추가적인 렌더링, 2. 무한루프)
    // useEffect(() => {
    //     setCount(prev => prev + 1);
    // }, [count])
    // => 렌더링 이후 useEffect 실행 -> setCount 실행 -> count가 변경돼서 리렌더링 -> 다시 setCount 실행 -> count 변경돼서 다시 리렌더링 .... 무한루프

    const onClickCountUp = () => {
        setCount(count + 1);
    };

    console.log("나는 언제 실행되지");

    return (
        <>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트 올리는 버튼</button>
            <Link href={"/"}>나가기</Link>
        </>
    );
}
