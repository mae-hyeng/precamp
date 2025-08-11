"use client";

import { memo } from "react";

function ChildPage(props) {
    console.log("child 렌더링 됨");

    return (
        <>
            <div>========================================</div>
            <h1>자식 컴포넌트</h1>
            <div>========================================</div>
        </>
    );
}

export default memo(ChildPage);
// export default ChildPage;
