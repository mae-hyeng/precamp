"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            _id
            writer
            title
            contents
        }
    }
`;

const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
        fetchBoardsCount
    }
`;

export default function StaticRoutingMovedPage() {
    const [startPage, setStartPage] = useState(1);

    const { data, refetch } = useQuery(FETCH_BOARDS);
    const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

    const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

    console.log(data);

    const onClickPage = (e) => {
        refetch({
            page: Number(e.currentTarget.id),
        });
    };

    const onClickPrevPage = () => {
        if (startPage === 1) return;

        setStartPage(startPage - 10);
        refetch({ page: startPage - 10 });
    };

    const onClickNextPage = () => {
        if (startPage + 10 > lastPage) return;

        setStartPage(startPage + 10);
        refetch({ page: startPage + 10 });
    };

    return (
        <div>
            {data?.fetchBoards.map((d) => (
                <div key={d._id}>
                    <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                    <span style={{ margin: "10px" }}>제목 : {d.title}</span>
                </div>
            ))}

            <span onClick={onClickPrevPage}>이전페이지</span>

            {new Array(10).fill("철수").map(
                (_, idx) =>
                    idx + startPage <= lastPage && (
                        <span
                            key={idx + startPage}
                            id={String(idx + startPage)}
                            onClick={onClickPage}
                            style={{ margin: "5px" }}
                        >
                            {idx + startPage}
                        </span>
                    )
            )}

            <span onClick={onClickNextPage}>다음페이지</span>
        </div>
    );
}
