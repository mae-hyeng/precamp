"use client";

import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { CREATE_BOARD_COMMENT } from "./queries";
import { ChangeEvent, useState } from "react";

export const useBoardComment = () => {
    const params = useParams();
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [contents, setContents] = useState("");
    const [rating, setRating] = useState(3.5);

    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
    // const [fetchBoardComments] = useQuery(FETCH_BOARD_COMMENTS);

    // const {data} =

    const onClickSubmitComment = async () => {
        const commentVariables = {
            createBoardCommentInput: {
                writer: writer,
                password: password,
                contents: contents,
                rating: 3.5,
                // rating: rating,
            },
            boardId: params.boardId,
        };

        const result = await createBoardComment({
            variables: commentVariables,
        });

        console.log(result);
    };

    const onChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === "writer") setWriter(value);
        else if (name === "password") setPassword(value);
        else if (name === "contents") setContents(value);
        else if (name === "rating") setRating(value);
    };

    return {
        onClickSubmitComment,
        onChangeInput,
    };
};
