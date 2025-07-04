"use client";
import { useMutation, gql } from "@apollo/client";

const myGraphqlSetting = gql`
    mutation {
        createBoard(writer: "메시임", title: "메she", contents: "메시니?") {
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
        const result = await myFunc();
        console.log(result);
    };

    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
