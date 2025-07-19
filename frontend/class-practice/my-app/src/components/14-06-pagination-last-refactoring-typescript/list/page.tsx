"use client";

import { IListProps } from "./types";

export default function List({ data }: IListProps) {
    return (
        <div>
            {data?.fetchBoards?.map((d) => (
                <div key={d._id}>
                    <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                    <span style={{ margin: "10px" }}>제목 : {d.title}</span>
                </div>
            ))}
        </div>
    );
}
