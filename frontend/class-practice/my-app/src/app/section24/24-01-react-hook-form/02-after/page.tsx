"use client";
import { useMutation, gql } from "@apollo/client";
import { useForm } from "react-hook-form";

// const myGraphqlSetting = gql`
//     # mutation createBoard0604($myWriter: String, $myTitle: String, $myContent: String) {
//     #     createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {
//     #         _id
//     #         number
//     #         message
//     #     }
//     # }
// `;

export default function GraphqlMutationPage() {
    const { register, handleSubmit } = useForm();
    // const [myFunc] = useMutation(myGraphqlSetting);

    const onClickSubmit = async (data) => {
        console.log(data);
        // 그래프큐엘 요청
        // const result = await myFunc({
        //     variables: {
        //         // variables => 이게 $역할을 함
        //         myWriter: data.writer,
        //         myTitle: data.title,
        //         myContent: data.contents,
        //     },
        // });
        // console.log(result);
    };

    console.log("리렌더링이 되나?");

    return (
        <form onSubmit={handleSubmit(onClickSubmit)}>
            작성자 : <input {...register("writer")} />
            <br />
            제목 : <input {...register("title")} />
            <br />
            내용 : <input {...register("contents")} />
            <br />
            주소 : <input {...register("boardAddress.addressDetail")} />
            <br />
            <button>GRAPHQL-API 요청하기</button>;
        </form>
    );
}

/* 
<form>
    <button type"button"></button>  // 내가 onClick 추가하고 싶을 때
    <button type"reset"></button>   // 폼 안에 있는 인풋들 초기화 하고 싶을 때
    <button type"submit"></button>  // 폼 등록/수정 등 하고 싶을 때 => 이게 디폴트 값
</form>
*/
