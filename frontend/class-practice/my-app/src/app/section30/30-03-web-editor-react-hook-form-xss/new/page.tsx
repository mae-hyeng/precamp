"use client";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Modal } from "antd";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { gql, useMutation } from "@apollo/client";

const myGraphqlSetting = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            title
            contents
        }
    }
`;

// 프론트엔드 서버에서 import 안될 때 아래와 같은 방법으로 다이나믹 import 사용
const ReactQuill = dynamic(() => import("react-quill"), {
    ssr: false,
});

export default function WebEditorPage() {
    const [myFunc] = useMutation(myGraphqlSetting);
    const router = useRouter();
    const { register, handleSubmit, setValue, trigger } = useForm({
        mode: "onChange",
    });

    // ReactQuill 만든 사람들밍 만들어 놓은 onChange => 따라서, event 안들어옴
    const onChangeContents = (value) => {
        console.log(value);

        // register로 등록하지 않고 강제로 값 넣어주기
        setValue("contents", value);

        // trigger => 값만 넣는 것이 아니라, 변경을 감지해서 검증 같은 것들도 해줌
        trigger("contents");
    };

    const onSubmit = async (data) => {
        // e.preventDefault(); // handleSubmit에서 자동으로 preventDefault() 해줌

        const result = await myFunc({
            variables: {
                createBoardInput: {
                    ...data,
                    // writer: data.writer,
                    // password: data.password,
                    // title: data.title,
                    // contents: data.contents,
                },
            },
        });

        const { Modal } = await import("antd"); // code-spliting
        Modal.success({ content: "게시글 등록에 성공했습니다" });

        const boardId = result.data.createBoard._id;
        router.push(`/section30/30-02-web-editor-react-hook-form/${boardId}`);
    };

    // 백그라운드에서 몰래 받기 가능
    // useEffect(() => {
    //     const {Modal} = await import("antd")
    // }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            작성자 : <input type="text" {...register("writer")} />
            <br />
            비밀번호 : <input type="password" {...register("password")} />
            <br />
            제목 : <input type="text" {...register("title")} />
            <br />
            내용 : <ReactQuill onChange={onChangeContents} />
            <br />
            <button>등록하기</button>
        </form>
    );
}
