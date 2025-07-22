"use client";

import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
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

        const result = await uploadFile({ variables: { file } });

        console.log(result.data.uploadFile.url);
        setImageUrl(result.data.uploadFile.url);
    };

    const onClickImage = () => {
        // document.getElementById("파일태그ID")?.click();
        // 이거 대신 참조시키는 useRef 사용
        fileRef.current.click();
    };

    return (
        <div>
            <div
                style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
                onClick={onClickImage}
            >
                이미지선택
            </div>
            <input ref={fileRef} onChange={onChangeFile} type="file" style={{ display: "none" }} />
            <img src={`https://storage.googleapis.com/${imageUrl}`} alt="이미지" />
        </div>
    );
}
