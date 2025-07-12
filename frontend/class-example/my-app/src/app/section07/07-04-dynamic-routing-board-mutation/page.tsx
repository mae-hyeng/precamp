"use client";

import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const myGraphqlSetting = gql`
    mutation createBoard0704($myWriter: String, $myTitle: String, $myContent: String) {
        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {
            _id
            number
            message
        }
    }
`;

export default function StaticRoutingPage() {
    const router = useRouter();

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [myFunc] = useMutation(myGraphqlSetting);

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
        // try에 있는 내용 시도하다가 실패하면, 그 아랫줄들을 무시하고 catch로 넘어감
        try {
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
            console.log(result.data.createBoard.number);

            alert("게시글 등록이 완료되었습니다");
            router.push(
                `/section07/07-04-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
            );
        } catch (error) {
            alert(error);
        }
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
