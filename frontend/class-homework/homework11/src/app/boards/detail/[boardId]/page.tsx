"use client";

import { FETCH_BOARD } from "@/components/boards-detail/queries";
import { BoardsDetail } from "@/components/boards-detail";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const BoardsDetailPage = () => {
    const params = useParams();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: params.boardId },
    });
    return <BoardsDetail data={data} />;
};

export default BoardsDetailPage;
