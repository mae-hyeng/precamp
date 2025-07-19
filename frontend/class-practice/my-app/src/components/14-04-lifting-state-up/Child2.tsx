"use client";

export default function Child2({ count, incCount, decCount }) {
    return (
        <div>
            <div>자식 2의 카운트 : {count}</div>
            <button onClick={incCount}>카운트 올리기</button>
            <button onClick={decCount}>카운트 내리기</button>
        </div>
    );
}
