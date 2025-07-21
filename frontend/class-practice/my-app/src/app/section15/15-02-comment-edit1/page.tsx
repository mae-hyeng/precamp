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

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS);

    const [myIndex, setMyIndex] = useState(-1);

    const onClickEdit = (e) => {
        setMyIndex(Number(e.currentTarget.id));
    };

    return (
        <div>
            {data?.fetchBoards.map((d, idx) =>
                myIndex !== idx ? (
                    <div key={d._id}>
                        <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                        <span style={{ margin: "10px" }}>제목 : {d.title}</span>
                        <button id={idx} onClick={onClickEdit}>
                            수정하기
                        </button>
                    </div>
                ) : (
                    <input type="text" key={d._id} />
                )
            )}
        </div>
    );
}
