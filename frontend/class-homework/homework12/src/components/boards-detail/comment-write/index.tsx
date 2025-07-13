"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useBoardComment } from "./hook";

export const CommentWrite = () => {
    const { onClickSubmitComment, onChangeInput } = useBoardComment();
    return (
        <div className={styles.detail_reg_comment}>
            <div className={styles.detail_reg_comment_img_wrapper}>
                <Image
                    src="/images/chat.png"
                    alt="댓글이미지"
                    width={25}
                    height={0}
                    sizes="100vw"
                />
                댓글
            </div>
            <div>별점</div> {/* name rating */}
            <div className={styles.writer_password_wrapper}>
                <div className={styles.writer_wrapper}>
                    <div>
                        작성자
                        <span className={styles.require_input}>*</span>
                    </div>
                    <input
                        onChange={onChangeInput}
                        name="writer"
                        placeholder="작성자 명을 입력해 주세요."
                    />
                </div>
                <div className={styles.password_wrapper}>
                    <div>
                        비밀번호<span className={styles.require_input}>*</span>
                    </div>
                    <input
                        onChange={onChangeInput}
                        name="password"
                        placeholder="비밀번호를 입력해 주세요."
                    />
                </div>
            </div>
            <textarea
                onChange={onChangeInput}
                name="contents"
                placeholder="댓글을 입력해 주세요."
            ></textarea>
            <div className={styles.detail_reg_comment_btn_wrapper}>
                <button onClick={onClickSubmitComment}>댓글 등록</button>
            </div>
        </div>
    );
};
