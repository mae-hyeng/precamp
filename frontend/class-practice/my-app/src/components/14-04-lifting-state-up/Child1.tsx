"use client";

export default function Child1({ count, decCount, setCount }) {
    const onClickCountUp = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div>자식 1의 카운트 : {count}</div>
            <button onClick={onClickCountUp}>카운트 올리기</button>
            <button onClick={decCount}>카운트 내리기</button>
        </div>
    );
}
