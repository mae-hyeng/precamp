// 상세페이지 -> 수정페이지
"use client";

import BoardsWrite from "@/components/09-06-boards-write-validation-hooks-refactoring";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
    query fetchBoard($page: Int) {
        fetchBoard(number: $page) {
            number
            writer
            title
            contents
        }
    }
`;

export default function BoardsDetailEditPage() {
    const params = useParams();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { page: Number(params.number) },
    });
    return <BoardsWrite isEdit={true} data={data} />;
}
