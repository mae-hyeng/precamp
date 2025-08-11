"use client";

import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

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
    const [file, setFile] = useState();

    const [myFunc] = useMutation(myGraphqlSetting);

    const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0]; // 배열로 들어오는 이유: <input type"file" multiple /> 일 때, 여러개 사용 가능
        console.log(file);

        // const result = await uploadFile({ variables: { file } });
        // console.log(result.data.uploadFile.url);
        // setImageUrl(result.data.uploadFile.url);

        // 1. 임시 URL 생성 => (가짜 URL => 내 브라우저에서만 접근 가능)
        // const result = URL.createObjectURL(file);
        // console.log(result);

        // 2. 임시 URL 생성 => (진짜 URL => 다른 브라우저에서도 접근 가능. 하지만 용량 큼)
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (e) => {
            console.log(e.target?.result);
            if (typeof e.target?.result === "string") {
                setImageUrl(e.target?.result);
                setFile(file);
            }
        };
    };

    const onClickSubmit = async () => {
        const resultFile = await uploadFile({ variables: { file } });

        const url = resultFile.data.uploadFile.url;

        // 2. 게시글 등록(createBoard)
        const result = await myFunc({
            // 1. 이미지등록(uploadFile)
            variables: {
                createBoardInput: {
                    writer: "짱구",
                    password: "1234",
                    title: "제목입니다",
                    contents: "내용!",
                    images: [url],
                },
            },
        });
        console.log(result);
    };

    return (
        <div>
            <input onChange={onChangeFile} type="file" />
            {/* <img src={`https://storage.googleapis.com/${imageUrl}`} alt="이미지" /> */}
            <img src={imageUrl} />
            <button onClick={onClickSubmit}>게시글 등록하기</button>
        </div>
    );
}
