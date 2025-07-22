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

export default function ImageUploadPage() {
    const [uploadFile] = useMutation(UPLOAD_FILE);
    const [imageUrl, setImageUrl] = useState("");

    const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0]; // 배열로 들어오는 이유: <input type"file" multiple /> 일 때, 여러개 사용 가능
        console.log(file);

        const result = await uploadFile({ variables: { file } });

        console.log(result.data.uploadFile.url);
        setImageUrl(result.data.uploadFile.url);
    };

    return (
        <div>
            <input onChange={onChangeFile} type="file" />
            <img src={`https://storage.googleapis.com/${imageUrl}`} alt="이미지" />
        </div>
    );
}
