"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
import { Fragment } from "react";

const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            number
            writer
            title
            contents
        }
    }
`;

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int) {
        deleteBoard(number: $number) {
            message
        }
    }
`;

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS);

    const [deleteBoard] = useMutation(DELETE_BOARD);

    const onClickDelete = (e) => {
        deleteBoard({
            variables: {
                number: Number(e.target.id),
            },
            refetchQueries: [
                { query: FETCH_BOARDS },
                // {} 여러개 사용 가능
                // ...
            ],
        });
    };

    return (
        <div>
            {data?.fetchBoards.map((d, idx) => (
                // <Fragment key={d.number}>
                <div key={d.number}>
                    {/* 1. 특별한 이유가 없으면 Fragment로 감싸기. <div />는 1개 더 그려야 되기 때문 */}
                    {/* 2. 프래그먼트는 <></>, <Fragment></Fragment/> */}
                    {/* 3. 프래그먼트에 key를 입력하려면 <Fragment key={1}</Fragment/> */}
                    {/* 4.index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 유지되므로 사실상 유일하지 않음 */}
                    {/* index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 유지되므로 사실상 유일하지 않기 때문에 더 고유한 값인 number를 사용*/}
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: "10px" }}>{d.number}</span>
                    <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                    <span style={{ margin: "10px" }}>제목 : {d.title}</span>
                    <span>
                        <button id={d.number} onClick={onClickDelete}>
                            삭제하기
                        </button>
                    </span>
                </div>
                // </Fragment>
            ))}
        </div>
    );
}
