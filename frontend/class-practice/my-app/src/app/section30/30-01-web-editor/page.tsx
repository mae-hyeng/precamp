"use client";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Modal } from "antd";
import dynamic from "next/dynamic";
import { useEffect } from "react";

// 프론트엔드 서버에서 import 안될 때 아래와 같은 방법으로 다이나믹 import 사용
const ReactQuill = dynamic(() => import("react-quill"), {
    ssr: false,
});

export default function WebEditorPage() {
    // ReactQuill 만든 사람들밍 만들어 놓은 onChange => 따라서, event 안들어옴
    const onChangeContents = (value) => {
        console.log(value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const { Modal } = await import("antd"); // code-spliting
        Modal.success({ content: "게시글 등록에 성공했습니다" });
    };

    // 백그라운드에서 몰래 받기 가능
    // useEffect(() => {
    //     const {Modal} = await import("antd")
    // }, [])

    return (
        <form onSubmit={onSubmit}>
            작성자 : <input type="text" />
            <br />
            비밀번호 : <input type="password" />
            <br />
            제목 : <input type="text" />
            <br />
            내용 : <ReactQuill onChange={onChangeContents} />
            <br />
            <button>등록하기</button>
        </form>
    );
}
