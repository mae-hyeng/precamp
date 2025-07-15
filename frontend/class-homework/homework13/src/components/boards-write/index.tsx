"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useBoardsWrite } from "./hook";
import { IBoardWriteProps } from "./types";

export const BoardsWrite = ({ isEdit, data }: IBoardWriteProps) => {
    const { onChangeInput, onClickUpdate, onClickSubmit } = useBoardsWrite();

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
