"use client";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const myGraphqlSetting = gql`
    # mutation createBoard0604($writer: String, $title: String, $content: String) {
    #     createBoard(writer: $writer, title: $title, contents: $content) {
    #         _id
    #         number
    #         message
    #     }
    # }
`;

export default function GraphqlMutationPage() {
    const [inputs, setInputs] = useState({
        writer: "",
        title: "",
        contents: "",
    });

    const [myFunc] = useMutation(myGraphqlSetting);

    const onClickSubmit = async () => {
        // 그래프큐엘 요청
        const result = await myFunc({
            variables: { ...inputs },
        });
        console.log(result);
    };

    const onChangeInputs = (e) => {
        // setInputs({ ...inputs, [e.target.id]: e.target.value });
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    return (
        <>
            작성자 : <input id="writer" onChange={onChangeInputs} />
            <br />
            제목 : <input id="title" onChange={onChangeInputs} />
            <br />
            내용 : <input id="contents" onChange={onChangeInputs} />
            <br />
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
        </>
    );
}
