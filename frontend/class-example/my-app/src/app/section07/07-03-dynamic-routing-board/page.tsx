"use client";

import { useRouter } from "next/navigation";

export default function StaticRoutingPage() {
    const router = useRouter();

    const onClickSubmit1 = () => {
        // 1. 게시글 등록하기

        // 2. 등록된 페이지로 이동하기
        router.push("/section07/07-03-dynamic-routing-board-moved/101");
    };

    const onClickSubmit2 = () => {
        router.push("/section07/07-03-dynamic-routing-board-moved/106");
    };

    const onClickSubmit3 = () => {
        router.push("/section07/07-03-dynamic-routing-board-moved/163");
    };

    return (
        <div>
            <button onClick={onClickSubmit1}>101번 게시글 게시글 등록하기</button>
            <br />
            <button onClick={onClickSubmit2}>106번 게시글 게시글 등록하기</button>
            <br />
            <button onClick={onClickSubmit3}>163번 게시글 게시글 등록하기</button>
            <br />
        </div>
    );
}
