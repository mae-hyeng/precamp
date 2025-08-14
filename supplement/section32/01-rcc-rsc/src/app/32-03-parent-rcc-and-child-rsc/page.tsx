"use client"; // 클라이언트 컴포넌트

import Rsc from "../components/32-03-parent-rcc-and-child-rsc";

export default function ParentRccAndChildRscPage() {
    console.log("클라이언트 컴포넌트가 렌더링 됨");

    // 부모가 RCC이므로, 자식은 RSC로 작동 안됨(자식까지 모두 RCC로 작동)
    return (
        <>
            <div>부모 컴포넌트</div>
            <Rsc />
        </>
    );
}
