"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
// import { useRouter } from "next/router";

const FETCH_BOARD = gql`
    query fetchBoard1002($page: Int) {
        fetchBoard(number: $page) {
            number
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutingMovedPage() {
    // 구버전 방식
    // const router = useRouter(); // import next/router
    // router.push();
    // router.query.page

    // 신버전 방식
    const params = useParams();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { page: Number(params.page) },
    });

    console.log(data);

    return (
        <div>
            <div>1번 게시글 상세페이지 이동이 완료되었습니다.</div>
            <div>작성자 : {data ? data.fetchBoard.writer : ""}</div>
            <div>제목 : {data && data.fetchBoard.title}</div>
            <div>내용 : {data?.fetchBoard.contents}</div> {/* ?. -> 옵셔널체이닝 */}
        </div>
    );
}
