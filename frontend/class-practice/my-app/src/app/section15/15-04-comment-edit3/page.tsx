"use client";

import CommentItem from "@/components/15-04-comment-edit3";
import { gql, useQuery } from "@apollo/client";

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

    return (
        <div>
            {data?.fetchBoards.map((d) => (
                <CommentItem key={d._id} d={d} />
            ))}
        </div>
    );
}
