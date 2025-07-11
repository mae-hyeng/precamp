"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

const CREATE_BOARD = gql`
    mutation createBoard(
        $writer: String
        $title: String!
        $contents: String!
        $password: String # , youtubeUrl: String, boardAddress: any, images: [String]
    ) {
        createBoard(
            createBoardInput: {
                writer: $writer
                password: $password
                title: $title
                contents: $contents
                # youtubeUrl: $youtubeUrl
                # boardAddress: {
                #     zipcode: $zipcode
                #     address: $address
                #     addressDetail: $addressDetail
                # }
                # images: $images
            }
        ) {
            _id
            writer
            title
            contents
            # youtubeUrl
            # likeCount
            # dislikeCount
            # images
            boardAddress {
                _id
                zipcode
                address
                addressDetail
                createdAt
                updatedAt
                deletedAt
            }
            # user
            # createdAt
            # updatedAt
            # deletedAt
        }
    }
`;

const UPDATE_BOARD = gql`
    mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId: ID!) {
        updateBoard(updateBoardInput: $updateBoardInput, password: $password, boardId: $boardId) {
            _id
            writer
            title
            contents
            youtubeUrl
        }
    }
`;

const FETCH_BOARD = gql`
    query fetchBoard($boardId: Int) {
        fetchBoard(number: $boardId) {
            number
            writer
            title
            contents
        }
    }
`;

export const BoardsWrite = ({ isEdit, data }) => {
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);

    const router = useRouter();
    const params = useParams();

    const onChangeInput = (e) => {
        const { name, value } = e.target;

        if (name === "writer") setWriter(value);
        else if (name === "password") setPassword(value);
        else if (name === "title") setTitle(value);
        else if (name === "content") setContents(value);

        if (value) document.getElementById(`${name}-error`).innerText = "";
    };

    const onClickSubmit = async () => {
        if (!writer) document.getElementById("writer-error").innerText = "작성자를 입력해주세요";

        if (!password)
            document.getElementById("password-error").innerText = "비밀번호를 입력해주세요";

        if (!title) document.getElementById("title-error").innerText = "제목을 입력해주세요";

        if (!contents) document.getElementById("content-error").innerText = "내용을 입력해주세요";

        try {
            const result = await createBoard({
                variables: {
                    writer: writer,
                    title: title,
                    contents: contents,
                    password: password,
                    // youtubeUrl: "",
                    // boardAddress: {
                    //     zipcode: "",
                    //     address: "",
                    //     addressDetail: "",
                    // },
                    // images: [],
                },
            });

            router.push(`/boards/detail/${result.data.createBoard._id}`);
        } catch (error) {
            alert("에러가 발생하였습니다. 다시 시도해 주세요.");
        }
    };

    const onClickUpdate = async () => {
        const pw = prompt("글을 입력할때 입력하셨던 비밀번호를 입력해주세요");
        try {
            const myVariables = {
                updateBoardInput: {
                    title: title,
                    contents: contents,
                },
                password: pw,
                boardId: params.boardId,
            };

            // if (writer) myVariables.writer = writer;
            if (title) myVariables.updateBoardInput.title = title;
            if (contents) myVariables.updateBoardInput.contents = contents;

            const result = await updateBoard({
                variables: myVariables,
                refetchQueries: [
                    {
                        query: FETCH_BOARD,
                        variables: { boardId: params.boardId },
                    },
                ],
            });
            router.push(`/boards/detail/${result.data.updateBoard._id}`);
        } catch (error) {
            alert("비밀번호가 일치하지 않습니다!");
        }
    };

    return (
        <div className={styles.BoardsNew}>
            <div className={styles.main}>
                <h5>게시물 등록</h5>
                <div className={styles.main_section_1}>
                    <div className={styles.section_1_wrapper}>
                        <div>
                            작성자
                            <span className={styles.require_input}>*</span>
                        </div>
                        <input
                            onChange={onChangeInput}
                            name="writer"
                            placeholder="작성자 명을 입력해 주세요."
                            defaultValue={data?.fetchBoard.writer}
                            disabled={isEdit ? true : false}
                        />
                        <div id="writer-error" className={styles.error}></div>
                    </div>
                    <div className={styles.section_1_wrapper}>
                        <div>
                            비밀번호<span className={styles.require_input}>*</span>
                        </div>
                        <input
                            onChange={onChangeInput}
                            name="password"
                            placeholder="비밀번호를 입력해 주세요."
                            disabled={isEdit ? true : false}
                        />
                        <div id="password-error" className={styles.error}></div>
                    </div>
                </div>
                <div className={styles.divideLine}></div>
                <div className={styles.main_section_2}>
                    <div>
                        제목<span className={styles.require_input}>*</span>
                    </div>
                    <input
                        onChange={onChangeInput}
                        name="title"
                        placeholder="제목을 입력해 주세요."
                        defaultValue={data?.fetchBoard.title}
                    />
                    <div id="title-error" className={styles.error}></div>
                </div>
                <div className={styles.divideLine}></div>
                <div className={styles.main_section_3}>
                    <div>
                        내용<span className={styles.require_input}>*</span>
                    </div>
                    <textarea
                        onChange={onChangeInput}
                        name="content"
                        placeholder="내용을 입력해 주세요."
                        defaultValue={data?.fetchBoard.contents}
                    ></textarea>
                    <div id="content-error" className={styles.error}></div>
                </div>
                <div className={styles.main_section_4}>
                    <div>주소</div>
                    <div className={styles.address_area_1}>
                        <input placeholder="01234" />
                        <button>우편번호 검색</button>
                    </div>
                    <div>
                        <input placeholder="주소를 입력해 주세요." />
                    </div>
                    <div>
                        <input placeholder="상세주소" />
                    </div>
                </div>
                <div className={styles.main_section_5}>
                    <div>유튜브 링크</div>
                    <input placeholder="링크를 입력해 주세요" />
                </div>
                <div className={styles.main_section_6}>
                    <div>사진 첨부</div>
                    <div className={styles.img_wrapper}>
                        <Image
                            src="/images/addImage.png"
                            alt="사진추가이미지"
                            width={30}
                            height={0}
                        />
                        <Image
                            src="/images/addImage.png"
                            alt="사진추가이미지"
                            width={30}
                            height={0}
                        />
                        <Image
                            src="/images/addImage.png"
                            alt="사진추가이미지"
                            width={30}
                            height={0}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <button className={styles.cancel}>취소</button>
                <button onClick={isEdit ? onClickUpdate : onClickSubmit} className={styles.submit}>
                    {isEdit ? "수정" : "등록"}하기
                </button>
            </div>
        </div>
    );
};
