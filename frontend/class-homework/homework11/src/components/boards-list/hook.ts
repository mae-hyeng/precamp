"use client";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { DELETE_BOARD, FETCH_BOARDS } from "./queries";

export const BoardsList = () => {
    const router = useRouter();
    const [deleteBoard] = useMutation(DELETE_BOARD);

    const onClickBoard = (boardId) => {
        router.push(`/boards/detail/${boardId}`);
    };

    const onClickDeleteBoard = (boardId) => {
        if (confirm("정말 삭제하시겠습니까?")) {
            deleteBoard({
                variables: {
                    boardId: boardId,
                },
                refetchQueries: [{ query: FETCH_BOARDS }],
            });
        }
    };

    const onClickRegister = () => {
        router.push("/boards/new");
    };

    return {
        onClickBoard,
        onClickDeleteBoard,
        onClickRegister,
    };
};
