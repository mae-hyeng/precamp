// "use client" 를 붙이지 않았지만, 부모가 RCC이므로, 자식도 RCC 작동

export default function Rsc() {
    console.log("??? 컴포넌트가 렌더링 됨"); // 브라우저에서 찍히면 클라이언트 컴포넌트
    return <div>자식 컴포넌트</div>;
}
