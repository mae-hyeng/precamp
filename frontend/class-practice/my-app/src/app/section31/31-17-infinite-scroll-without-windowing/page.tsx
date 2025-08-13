"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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
    const { data, fetchMore } = useQuery(FETCH_BOARDS);
    const [hasMore, setHasMore] = useState(true);

    const onNext = () => {
        if (!data) return;

        fetchMore({
            variables: {
                page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult.fetchBoards?.length) {
                    setHasMore(false);
                    return;
                }

                return {
                    fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
                };
            },
        });
    };

    return (
        <div>
            <InfiniteScroll
                next={onNext}
                hasMore={hasMore}
                loader={<div>로딩중입니다</div>}
                dataLength={data?.fetchBoards.length ?? 0}
            >
                {data?.fetchBoards.map((d) => (
                    <div key={d._id}>
                        <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                        <span style={{ margin: "10px" }}>제목 : {d.title}</span>
                    </div>
                ))}
                {data?.fetchBoards.map((d) => (
                    <div key={d._id}>
                        <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                        <span style={{ margin: "10px" }}>제목 : {d.title}</span>
                    </div>
                ))}
                {data?.fetchBoards.map((d) => (
                    <div key={d._id}>
                        <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                        <span style={{ margin: "10px" }}>제목 : {d.title}</span>
                    </div>
                ))}
            </InfiniteScroll>
            <Link href="/section31/31-17-infinite-scroll-without-windowing-moved">
                페이지 이동하기
            </Link>
        </div>
    );
}
