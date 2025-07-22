"use client";

import { checkValidationFile } from "@/commons/libraries/18-03-validation-file";
import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
        }
    }
`;

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

export default function ImageUploadPage() {
    const [uploadFile] = useMutation(UPLOAD_FILE);
    const [imageUrl, setImageUrl] = useState("");
    const fileRef = useRef();

    const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0]; // 배열로 들어오는 이유: <input type"file" multiple /> 일 때, 여러개 사용 가능
        console.log(file);

        const isValid = checkValidationFile(file);
        if (!isValid) return;

        const result = await uploadFile({ variables: { file } });
        console.log(result.data.uploadFile.url);
        setImageUrl(result.data.uploadFile.url);
    };

    const onClickImage = () => {
        // document.getElementById("파일태그ID")?.click();
        // 이거 대신 참조시키는 useRef 사용
        fileRef.current.click();
    };

    ////////////////////////////////////////////////////////////////////////////////////
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
        // 그래프큐엘 요청
        const result = await myFunc({
            variables: {
                createBoardInput: {
                    writer,
                    password: "1234",
                    title,
                    contents,
                    images: [imageUrl],
                },
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
            <div
                style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
                onClick={onClickImage}
            >
                이미지선택
            </div>
            <input
                type="file"
                ref={fileRef}
                onChange={onChangeFile}
                style={{ display: "none" }}
                accept="image/jpeg,image/png" // 1. jpg/jpeg 모두 가능. 2. 띄어쓰기없이 ','로 구분
            />
            <img src={`https://storage.googleapis.com/${imageUrl}`} alt="이미지" />
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </>
    );
}
