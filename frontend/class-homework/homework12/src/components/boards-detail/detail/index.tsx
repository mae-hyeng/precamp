"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useBoardsDetail } from "./hook";
import { IBoardDetailProps } from "./types";

export const BoardsDetail = ({ data }: IBoardDetailProps) => {
    const { onClickToBoards, onClickToUpdate } = useBoardsDetail();
    return (
        <>
            <div className={styles.Banner}>
                <Image
                    className={styles.banner_img}
                    src="/images/banner.png"
                    alt="배너이미지"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </div>
            <div className={styles.BoardsDetail}>
                <div className={styles.detail_header}>
                    <div className={styles.detail_header_title}>{data?.fetchBoard?.title}</div>
                    <div className={styles.detail_header_info}>
                        <div className={styles.info_user}>
                            <div>
                                <Image
                                    src="/images/profile1.png"
                                    alt="프로필이미지"
                                    width={25}
                                    height={0}
                                    sizes="100vw"
                                />
                            </div>
                            <div>{data?.fetchBoard?.writer}</div>
                        </div>
                        <div className={styles.info_regDate}>
                            {data?.fetchBoard?.createdAt
                                ? new Date(data.fetchBoard.createdAt)
                                      .toISOString()
                                      .slice(0, 10)
                                      .replaceAll("-", ".")
                                : ""}
                        </div>
                    </div>
                </div>
                <div className={styles.divideLine}></div>
                <div className={styles.detail_main}>
                    <div className={styles.detail_main_loc}>
                        <button>서울특별시 영등포구</button>
                    </div>
                    <div className={styles.detail_main_wrapper}>
                        <div className={styles.img1}>
                            <Image
                                className={styles.detail1_img}
                                src="/images/detail1.png"
                                alt="디테일1"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                        <div>{data?.fetchBoard?.contents}</div>
                        <div className={styles.img2}>
                            <Image
                                className={styles.detail2_img}
                                src="/images/detail2.png"
                                alt="디테일이미지"
                                width={100}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                    </div>
                    <div className={styles.detail_main_like}>
                        <div className={styles.detail_main_like_btn}>
                            <Image
                                src="/images/bad.png"
                                alt="싫어요이미지"
                                width={25}
                                height={0}
                                sizes="100vw"
                            />
                            24
                        </div>
                        <div className={styles.detail_main_like_btn}>
                            <Image
                                src="/images/good.png"
                                alt="좋아요"
                                width={25}
                                height={0}
                                sizes="100vw"
                            />
                            12
                        </div>
                    </div>
                    <div className={styles.detail_main_btn}>
                        <button onClick={onClickToBoards} className={styles.detail_main_btn_list}>
                            목록으로
                        </button>
                        <button onClick={onClickToUpdate} className={styles.detail_main_btn_modify}>
                            수정하기
                        </button>
                    </div>
                </div>
                <div className={styles.divideLine}></div>
            </div>
        </>
    );
};
