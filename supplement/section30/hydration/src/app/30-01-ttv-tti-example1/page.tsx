"use client";

export default function TtvTtiExample1Page() {
    return (
        <div>
            {/* 브라우저에서 그려지고 서버에서도 그려짐 */}
            <div>브라우저 + 서버 철수</div>

            {/* 브라우저에서만 그려짐 */}
            {process.browser && <div>브라우저 영희</div>}

            {/* window가 있다면(브라우저일 때) */}
            {typeof window !== "undefined" && <div>브라우저 훈이</div>}

            <div>브라우저 + 서버 맹구</div>
        </div>
    );
}
