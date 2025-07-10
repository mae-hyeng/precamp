"use client";

import { BoardsWrite } from "@/components/boards-write";
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

const BoardEdit = () => {
    const params = useParams();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { page: Number(params.boardId) },
    });
    return <BoardsWrite isEdit={true} data={data} />;
};

export default BoardEdit;
