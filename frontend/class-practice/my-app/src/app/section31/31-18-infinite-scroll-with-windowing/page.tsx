"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FixedSizeList as List } from "react-window";

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
                // loader={<div>로딩중입니다</div>}
                loader={<div></div>}
                dataLength={data?.fetchBoards.length ?? 0}
                scrollableTarget="스크롤대상ID" // <List /> 컴포넌트에 id를 스크롤대상ID로 바꾸기
            >
                <List
                    height={300}
                    width={"100%"}
                    itemSize={50}
                    itemCount={data?.fetchBoards.length}
                    itemData={data?.fetchBoards}
                    outerElementType={전체를감싸는태그}
                >
                    {({ index, style, data }) => (
                        <div style={style}>
                            <span style={{ margin: "10px" }}>작성자 : {data[index].writer}</span>
                            <span style={{ margin: "10px" }}>제목 : {data[index].title}</span>
                        </div>
                    )}
                </List>
            </InfiniteScroll>
            <Link href="/section31/31-18-infinite-scroll-with-windowing-moved">
                페이지 이동하기
            </Link>
        </div>
    );
}

const 전체를감싸는태그 = (props) => <div id="스크롤대상ID" {...props} />;
