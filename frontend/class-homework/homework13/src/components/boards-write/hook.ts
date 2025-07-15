"use client";

import { useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { IMyVariables } from "./types";
import { FETCH_BOARD } from "@/commons/hooks/queries";
import { CreateBoardDocument, UpdateBoardDocument } from "@/commons/graphql/graphql";

export const useBoardsWrite = () => {
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [createBoard] = useMutation(CreateBoardDocument);
    const [updateBoard] = useMutation(UpdateBoardDocument);

    const router = useRouter();
    const params = useParams();

    const onChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === "writer") setWriter(value);
        else if (name === "password") setPassword(value);
        else if (name === "title") setTitle(value);
        else if (name === "content") setContents(value);

        if (value) document.getElementById(`${name}-error`).innerText = "";
    };

    const onClickSubmit = async () => {
        if (!writer) document.getElementById("writer-error").innerText = "작성자를 입력해주세요";

        if (!password)
            document.getElementById("password-error").innerText = "비밀번호를 입력해주세요";

        if (!title) document.getElementById("title-error").innerText = "제목을 입력해주세요";

        if (!contents) document.getElementById("content-error").innerText = "내용을 입력해주세요";

        try {
            const result = await createBoard({
                variables: {
                    writer: writer,
                    title: title,
                    contents: contents,
                    password: password,
                    // youtubeUrl: "",
                    // boardAddress: {
                    //     zipcode: "",
                    //     address: "",
                    //     addressDetail: "",
                    // },
                    // images: [],
                },
            });

            router.push(`/boards/detail/${result.data.createBoard._id}`);
        } catch (error) {
            alert("에러가 발생하였습니다. 다시 시도해 주세요.");
        }
    };

    const onClickUpdate = async () => {
        const pw = prompt("글을 입력할때 입력하셨던 비밀번호를 입력해주세요");
        try {
            const myVariables: IMyVariables = {
                updateBoardInput: {
                    title: title,
                    contents: contents,
                },
                password: pw,
                boardId: params.boardId,
            };

            // if (writer) myVariables.writer = writer;
            if (title) myVariables.updateBoardInput.title = title;
            if (contents) myVariables.updateBoardInput.contents = contents;

            const result = await updateBoard({
                variables: myVariables,
                refetchQueries: [
                    {
                        query: FETCH_BOARD,
                        variables: { boardId: params.boardId },
                    },
                ],
            });
            router.push(`/boards/detail/${result.data.updateBoard._id}`);
        } catch (error) {
            alert("비밀번호가 일치하지 않습니다!");
        }
    };

    return {
        onChangeInput,
        onClickUpdate,
        onClickSubmit,
    };
};
