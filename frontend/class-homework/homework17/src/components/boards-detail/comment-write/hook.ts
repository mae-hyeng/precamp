"use client";

import { useMutation } from "@apollo/client";
import { useParams } from "next/navigation";
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./queries";
import { ChangeEvent, useState } from "react";

export const useBoardComment = () => {
    const params = useParams();
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [contents, setContents] = useState("");
    const [rating, setRating] = useState(2.5);

    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

    const onClickSubmitComment = async () => {
        const commentVariables = {
            createBoardCommentInput: {
                writer: writer,
                password: password,
                contents: contents,
                rating: rating,
            },
            boardId: params.boardId,
        };

        const result = await createBoardComment({
            variables: commentVariables,
            refetchQueries: [
                {
                    query: FETCH_BOARD_COMMENTS,
                    variables: { boardId: params.boardId },
                },
            ],
        });

        console.log(result);
        resetCommentArea();
    };

    const onChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === "writer") setWriter(value);
        else if (name === "password") setPassword(value);
        else if (name === "contents") setContents(value);
    };

    const onChangeRating = (e) => {
        console.log(e);
        setRating(e);
    };

    const resetCommentArea = () => {
        setWriter("");
        setPassword("");
        setContents("");
        setRating(2.5);
    };

    return {
        writer,
        password,
        contents,
        rating,
        onClickSubmitComment,
        onChangeInput,
        onChangeRating,
    };
};
