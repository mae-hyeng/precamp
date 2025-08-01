"use client";

import { gql, useQuery } from "@apollo/client";

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

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS);

    console.log(data);

    return (
        <div>
            {data?.fetchBoards.map((d) => (
                <div key={d.number}>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: "10px" }}>{d.number}</span>
                    <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                    <span style={{ margin: "10px" }}>제목 : {d.title}</span>
                </div>
            ))}
        </div>
    );
}
