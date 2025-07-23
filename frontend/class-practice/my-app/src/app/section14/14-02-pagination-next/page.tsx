"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
    query fetchBoards1402($page: Int) {
        fetchBoards(page: $page) {
            _id
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutingMovedPage() {
    const [startPage, setStartPage] = useState(1);

    const { data, refetch } = useQuery(FETCH_BOARDS);

    console.log(data);

    const onClickPage = (e) => {
        refetch({
            page: Number(e.currentTarget.id),
        });
    };

    const onClickPrevPage = () => {
        setStartPage(startPage - 10);
        refetch({ page: startPage - 10 });
    };

    const onClickNextPage = () => {
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

            {new Array(10).fill("철수").map((_, idx) => (
                <span key={idx + startPage} id={String(idx + startPage)} onClick={onClickPage}>
                    {idx + startPage}
                </span>
            ))}

            <span onClick={onClickNextPage}>다음페이지</span>
        </div>
    );
}
