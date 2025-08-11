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
    const [imageUrls, setImageUrls] = useState(["", "", ""]);
    const [files, setFiles] = useState<File[]>([]);

    const [myFunc] = useMutation(myGraphqlSetting);

    const onChangeFile = (idx) => async (e: ChangeEvent<HTMLInputElement>) => {
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
                const tempUrls = [...imageUrls];
                tempUrls[idx] = e.target.result;
                setImageUrls(tempUrls);

                const tempFiles = [...files];
                tempFiles[idx] = file;
                setFiles(tempFiles);
            }
        };
    };

    const onClickSubmit = async () => {
        // 1. 이미지등록(uploadFile)
        // 1-1) 안좋은예제 - await를 매번 기다리기 => 아래 코드를 for문으로 만들 수 있지만 안티패턴(안좋은 패턴)임. for 내에서 await 쓰지 않아야 됨
        // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
        // const resultFile1 = await uploadFile({ variables: { file: files[0] } });
        // const resultFile2 = await uploadFile({ variables: { file: files[0] } });
        // const resultUrls = [
        //     resultFile0.data.uploadFile.url,
        //     resultFile1.data.uploadFile.url,
        //     resultFile2.data.uploadFile.url,
        // ];

        // 1-2) 좋은예제 - Promise.all 사용
        // const results = await Promise.all([
        //     uploadFile({ variables: { file: files[0] } }),
        //     uploadFile({ variables: { file: files[1] } }),
        //     uploadFile({ variables: { file: files[2] } }),
        // ]);
        // console.log(results); // [resultFile0, resultFile1, resultFile2]
        // const resultUrls = results.map((el) => el.data.uploadFile.url);

        // 1-3) 좋은예제 - Promise.all 사용 => 리팩토링
        const results = await Promise.all(
            files.map((el) => uploadFile({ variables: { file: el } }))
        );
        const resultUrls = results.map((el) => el.data.uploadFile.url);

        // 2. 게시글 등록(createBoard)
        const result = await myFunc({
            variables: {
                createBoardInput: {
                    writer: "짱구",
                    password: "1234",
                    title: "제목입니다",
                    contents: "내용!",
                    images: resultUrls,
                },
            },
        });
        console.log(result);
    };

    return (
        <div>
            <input onChange={onChangeFile(0)} type="file" />
            <input onChange={onChangeFile(1)} type="file" />
            <input onChange={onChangeFile(2)} type="file" />
            {/* <img src={`https://storage.googleapis.com/${imageUrl}`} alt="이미지" /> */}
            <img src={imageUrls[0]} />
            <img src={imageUrls[1]} />
            <img src={imageUrls[2]} />

            <button onClick={onClickSubmit}>게시글 등록하기</button>
        </div>
    );
}
