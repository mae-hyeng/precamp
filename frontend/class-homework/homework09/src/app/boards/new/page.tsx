"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/navigation";

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }
`;

const BoardsNew = () => {
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [createBoard] = useMutation(CREATE_BOARD);

    const router = useRouter();

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

        // if (writer && password && title && contents) alert("게시글 등록이 가능한 상태입니다!");

        try {
            const result = await createBoard({
                variables: {
                    writer: writer,
                    title: title,
                    contents: contents,
                },
            });

            router.push(`/boards/detail/${result.data.createBoard.number}`);
        } catch (error) {
            alert("에러가 발생하였습니다. 다시 시도해 주세요.");
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
                        />
                        <div id="password-error" className={styles.error}></div>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.main_section_2}>
                    <div>
                        제목<span className={styles.require_input}>*</span>
                    </div>
                    <input
                        onChange={onChangeInput}
                        name="title"
                        placeholder="제목을 입력해 주세요."
                    />
                    <div id="title-error" className={styles.error}></div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.main_section_3}>
                    <div>
                        내용<span className={styles.require_input}>*</span>
                    </div>
                    <textarea
                        onChange={onChangeInput}
                        name="content"
                        placeholder="내용을 입력해 주세요."
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
                <button onClick={onClickSubmit} className={styles.submit}>
                    등록하기
                </button>
            </div>
        </div>
    );
};

export default BoardsNew;
