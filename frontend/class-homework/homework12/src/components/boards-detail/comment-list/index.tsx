"use client";

import Image from "next/image";
import styles from "./styles.module.css";

export const CommentList = ({ commentsData }) => {
    const comments = commentsData.data;
    return (
        <div className={styles.detail_all_comment}>
            <div
                className={styles.detail_all_comment_empty}
                style={comments ? { display: "none" } : { display: "block" }}
            >
                등록된 댓글이 없습니다.
            </div>
            {/* {commentsData?.} */}
            {comments?.fetchBoardComments.map((comment) => (
                <>
                    <div key={comment._id} className={styles.comment_wrapper}>
                        <div className={styles.user_wrapper}>
                            <div className={styles.detail_user_info}>
                                <Image
                                    src="/images/profile1.png"
                                    alt="프로필"
                                    width={25}
                                    height={0}
                                />
                                {comment.writer}
                            </div>
                            <div>{comment.rating}</div>
                        </div>
                        <div>{comment.contents}</div>
                        <div className={styles.detail_comment_contents}>
                            {new Date(comment.createdAt)
                                .toISOString()
                                .slice(0, 10)
                                .replaceAll("-", ".")}
                        </div>
                    </div>
                    <div className={styles.divideLine}></div>
                </>
            ))}
        </div>
    );
};
