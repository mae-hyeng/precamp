"use client";

import { FetchBoardsDocument } from "@/commons/graphql/graphql";
import CommentItem from "@/components/15-05-comment-edit3-typescript";
import { useQuery } from "@apollo/client";

// const FETCH_BOARDS = gql`
//     query fetchBoards($page: Int) {
//         fetchBoards(page: $page) {
//             _id
//             writer
//             title
//             contents
//         }
//     }
// `;

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FetchBoardsDocument);

    return (
        <div>
            {data?.fetchBoards.map((d) => (
                <CommentItem key={d._id} d={d} />
            ))}
        </div>
    );
}
