"use client";

import { gql, useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const myGraphqlSetting = gql`
    mutation createBoard($myWriter: String, $myTitle: String, $myContents: String) {
        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {
            _id
            number
            message
        }
    }
`;

const UPDATE_BOARD = gql`
    mutation updateBoard($myNumber: Int, $myWriter: String, $myTitle: String, $myContents: String) {
        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {
            _id
            number
            message
        }
    }
`;

export default function BoardsWrite({ isEdit, data }) {
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
        router.push(`/section09/09-04-boards-validation/${result.data.createBoard.number}`);
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
        router.push(`/section09/09-04-boards-validation/${result.data.updateBoard.number}`);
    };

    return (
        <>
            작성자 : <input onChange={onChangeWriter} defaultValue={data?.fetchBoard.writer} />
            <br />
            제목 : <input onChange={onChangeTitle} defaultValue={data?.fetchBoard.title} />
            <br />
            내용 : <input onChange={onChangeContents} defaultValue={data?.fetchBoard.contents} />
            <br />
            <button onClick={isEdit ? onClickUpdate : onClickSubmit}>
                {isEdit ? "수정" : "등록"}하기
            </button>
        </>
    );
}
