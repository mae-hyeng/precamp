"use client";

import { useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import BoardsWriteUI from "./boards-write.presenter";
import { myGraphqlSetting, UPDATE_BOARD } from "./boards-write.queries";

export default function BoardWrite({ isEdit, data }) {
    const router = useRouter();
    const params = useParams();

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [createBoard] = useMutation(myGraphqlSetting);
    const [updateBoard] = useMutation(UPDATE_BOARD);

    const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
        setWriter(e.target.value);
    };
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
        setContents(e.target.value);
    };

    const onClickSubmit = async () => {
        const result = await createBoard({
            variables: {
                myWriter: writer,
                myTitle: title,
                myContents: contents,
            },
        });
        console.log(result);
        alert("등록이 완료되었습니다.");
        router.push(
            `/section09/09-05-boards-validation-container-presentational-example/${result.data.createBoard.number}`
        );
    };

    const onClickUpdate = async () => {
        const myVariables = { myNumber: Number(params.number) };

        if (writer) myVariables.myWriter = writer;
        if (title) myVariables.myTitle = title;
        if (contents) myVariables.myContents = contents;

        const result = await updateBoard({
            variables: myVariables,
        });
        console.log(result);
        alert("수정이 완료되었습니다.");
        router.push(
            `/section09/09-05-boards-validation-container-presentational-example/${result.data.updateBoard.number}`
        );
    };

    return (
        <BoardsWriteUI
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            onClickUpdate={onClickUpdate}
            isEdit={isEdit}
            data={data}
        />
    );
}
