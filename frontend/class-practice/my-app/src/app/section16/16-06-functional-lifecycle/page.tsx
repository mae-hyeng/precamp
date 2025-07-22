"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage() {
    const [count, setCount] = useState(1);

    // componentDidMount () {
    //     console.log("그려지고 나서 실행");
    //     // ex) API 요청, 인풋 포커스 깜빡깜빡 등
    // }

    // 1. componentDidMount와 동일
    useEffect(() => {
        console.log("그려지고 나서 실행");
        // ex) API 요청, 인풋 포커스 깜빡깜빡 등
    }, []);

    // componentDidUpdate () {
    //     console.log("변경되고 나서 실행");
    // }

    // 2. componentDidMount + componentDidUpdate 와 동일
    useEffect(() => {
        console.log("변경되고 나서 실행");
    });

    // componentWillUnmount () {
    //     console.log("사라지기 전에 실행");
    //     // ex) 채팅방 나가기 API 요청, 불필요한 타이머 삭제 등 청소하는 공간(clean up function)
    // }

    useEffect(() => {
        // 3. componentWillUnmount 와 동일 => clean-up function 이라고 부름
        return () => {
            console.log("사라지기 전에 실행");
            // ex) 채팅방 나가기 API 요청, 불필요한 타이머 삭제 등 청소하는 공간(clean up function)
        };
    }, []);

    const onClickCountUp = () => {
        setCount(count + 1);
    };

    return (
        <>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트 올리는 버튼</button>
            <Link href={"/"}>나가기</Link>
        </>
    );
}
