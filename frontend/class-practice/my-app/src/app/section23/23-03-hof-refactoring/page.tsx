"use client";

import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
    query fetchBoards2303($page: Int) {
        fetchBoards(page: $page) {
            _id
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutingMovedPage() {
    const { data, refetch } = useQuery(FETCH_BOARDS);

    console.log(data);

    // 1. refactoring 전
    // const onClickPage = (e: MouseEvent<HTMLSpanElement>) => {
    //     refetch({
    //         page: Number(e.currentTarget.id),
    //     });
    // };

    // 2. refactoring 후
    const onClickPage = (page: number) => () => {
        refetch({ page });
    };

    return (
        <div>
            {data?.fetchBoards.map((d) => (
                <div key={d._id}>
                    <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                    <span style={{ margin: "10px" }}>제목 : {d.title}</span>
                </div>
            ))}

            {new Array(10).fill("철수").map((_, idx) => (
                <span key={idx + 1} onClick={onClickPage(idx + 1)}>
                    {idx + 1}
                </span>
            ))}
        </div>
    );
}
