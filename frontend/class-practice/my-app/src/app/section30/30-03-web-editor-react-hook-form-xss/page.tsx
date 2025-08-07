"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const FETCH_BOARDS = gql`
    query fetchBoards3003Pagination($page: Int) {
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

    console.log(data);

    return (
        <div>
            {data?.fetchBoards.map((d) => (
                <Link key={d._id} href={`/section30/30-03-web-editor-react-hook-form-xss/${d._id}`}>
                    <div>
                        <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                        <span style={{ margin: "10px" }}>제목 : {d.title}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
