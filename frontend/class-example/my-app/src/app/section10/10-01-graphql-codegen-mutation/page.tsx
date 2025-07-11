"use client";
import { useMutation, gql } from "@apollo/client";

const myGraphqlSetting = gql`
    mutation createBoard($myWriter: String, $myTitle: String, $myContent: String) {
        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [myFunc] = useMutation(myGraphqlSetting);

    const onClickSubmit = async () => {
        // 그래프큐엘 요청
        const result = await myFunc({
            // $myWriter : "훈발롬",
            // $myTitle : "안녕하세요",
            // $myContent: "반갑습니다",
            // 위의 내용을 아래처럼 작성할 수 있음
            variables: {
                // variables => 이게 $역할을 함
                myWriter: "훈발롬",
                myTitle: "안녕하세요",
                myContent: "반갑습니다",
            },
        });
        console.log(result);
    };

    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
