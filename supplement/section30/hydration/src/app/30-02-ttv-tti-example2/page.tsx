"use client";

export default function TtvTtiExample2Page() {
    // 하이드레이션 이전에는 클릭 안됨
    const onClickBUtton = () => {
        alert("현재까지 TTI 완료");
    };
    return (
        // 버튼이 화면에 보여졌다는 것은 ttv까지 됐다는 의미
        // 클릭은 안됨. 클릭은 하이드레이션 되고 나서 됨
        <button onClick={onClickBUtton}>버튼을 클릭하세요</button>
    );
}
