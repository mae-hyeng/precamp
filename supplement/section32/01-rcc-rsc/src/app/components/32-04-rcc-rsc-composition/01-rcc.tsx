"use client";

export default function Rcc({ children }) {
    console.log("클라이언트 컴포넌트 렌더링");
    return (
        <>
            <div>RCC(클라이언트 컴포넌트)</div>
            <>{children}</>
        </>
    );
}
