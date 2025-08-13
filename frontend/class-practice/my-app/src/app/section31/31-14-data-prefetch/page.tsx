"use client";

import { gql, useApolloClient, useQuery } from "@apollo/client";
import Link from "next/link";
import _ from "lodash";

const FETCH_BOARDS = gql`
    query fetchBoards3114Pagination($page: Int) {
        fetchBoards(page: $page) {
            _id
            writer
            title
        }
    }
`;

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS);
    const client = useApolloClient();

    const prefetchBOardDebounce = _.debounce((boardId) => {
        client.query({
            query: FETCH_BOARD,
            variables: { boardId },
        });
    }, 200);

    const prefetchBoard = (boardId) => () => {
        prefetchBOardDebounce(boardId);
    };

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <Link href={`/section31/31-14-data-prefetch-moved/${el._id}`}>
                        <span style={{ margin: "10px" }} onMouseOver={prefetchBoard(el._id)}>
                            제목 : {el.title}
                        </span>
                    </Link>
                    <span style={{ margin: "10px" }}>작성자 : {el.writer}</span>
                </div>
            ))}
        </div>
    );
}
