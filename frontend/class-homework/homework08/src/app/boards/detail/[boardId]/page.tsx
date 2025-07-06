"use client";

import { gql, useQuery } from "@apollo/client";
import styles from "./styles.module.css";
import Image from "next/image";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
        fetchBoard(number: $number) {
            number
            writer
            title
            contents
            like
            createdAt
        }
    }
`;

const BoardsDetail = () => {
    const params = useParams();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(params.boardId) },
    });

    console.log(data);

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
                <div className={styles.line}></div>
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
                        <div>
                            {/* 살겠노라 살겠노라. 청산에 살겠노라.
                            <br />
                            머루랑 다래를 먹고 청산에 살겠노라.
                            <br />
                            얄리얄리 얄랑셩 얄라리 얄라
                            <br />
                            <br />
                            우는구나 우는구나 새야. 자고 일어나 우는구나 새야.
                            <br />
                            너보다 시름 많은 나도 자고 일어나 우노라.
                            <br /> 얄리얄리 얄라셩 얄라리 얄라
                            <br />
                            <br />
                            갈던 밭(사래) 갈던 밭 보았느냐. 물 아래(근처) 갈던 밭 보았느냐
                            <br />
                            이끼 묻은 쟁기를 가지고 물 아래 갈던 밭 보았느냐.
                            <br />
                            얄리얄리 얄라셩 얄라리 얄라
                            <br />
                            <br />
                            이럭저럭 하여 낮일랑 지내 왔건만
                            <br />
                            올 이도 갈 이도 없는 밤일랑 또 어찌 할 것인가.
                            <br />
                            얄리얄리 얄라셩 얄라리 얄라
                            <br />
                            <br />
                            어디다 던지는 돌인가 누구를 맞히려던 돌인가. <br />
                            미워할 이도 사랑할 이도 없이 맞아서 우노라.
                            <br />
                            얄리얄리 얄라셩 얄라리 얄라
                            <br />
                            <br />
                            살겠노라 살겠노라. 바다에 살겠노라.
                            <br />
                            나문재, 굴, 조개를 먹고 바다에 살겠노라.
                            <br />
                            얄리얄리 얄라셩 얄라리 얄라
                            <br />
                            <br />
                            가다가 가다가 듣노라. 에정지(미상) 가다가 듣노라. <br />
                            사슴(탈 쓴 광대)이 솟대에 올라서 해금을 켜는 것을 듣노라.
                            <br />
                            얄리얄리 얄라셩 얄라리 얄라
                            <br />
                            <br />
                            가다 보니 배불룩한 술독에 독한 술을 빚는구나.
                            <br />
                            조롱박꽃 모양 누룩이 매워 (나를) 붙잡으니 내 어찌 하리이까.[1]
                            <br />
                            얄리얄리 얄라셩 얄라리 얄라 */}
                            {data?.fetchBoard?.contents}
                        </div>
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
                        <button className={styles.detail_main_btn_list}>목록으로</button>
                        <button className={styles.detail_main_btn_modify}>수정하기</button>
                    </div>
                </div>
                <div className={styles.line}></div>
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
                    <div>별점</div>
                    <textarea placeholder="댓글을 입력해 주세요."></textarea>
                    <div className={styles.detail_reg_comment_btn_wrapper}>
                        <button>댓글 등록</button>
                    </div>
                </div>
                <div className={styles.detail_all_comment}>
                    <div>등록된 댓글이 없습니다.</div>
                </div>
            </div>
        </>
    );
};

export default BoardsDetail;
