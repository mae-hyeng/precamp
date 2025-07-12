"use client";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const myGraphqlSetting = gql`
    mutation createBoard0604($myWriter: String, $myTitle: String, $myContent: String) {
        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [myFunc] = useMutation(myGraphqlSetting);

    const onChangeWriter = (e) => {
        setWriter(e.target.value);
    };
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const onChangeContents = (e) => {
        setContents(e.target.value);
    };

    const onClickSubmit = async () => {
        // 그래프큐엘 요청
        const result = await myFunc({
            variables: {
                // variables => 이게 $역할을 함
                myWriter: writer,
                myTitle: title,
                myContent: contents,
            },
        });
        console.log(result);
    };

    return (
        <>
            작성자 : <input onChange={onChangeWriter} />
            <br />
            제목 : <input onChange={onChangeTitle} />
            <br />
            내용 : <input onChange={onChangeContents} />
            <br />
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
        </>
    );
}
