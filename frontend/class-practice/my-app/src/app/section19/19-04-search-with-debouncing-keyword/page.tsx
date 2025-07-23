"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import _ from "lodash";

const FETCH_BOARDS = gql`
    query fetchBoardsSearchWithDebouncingKeyword($page: Int, $search: String) {
        fetchBoards(page: $page, search: $search) {
            _id
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutingMovedPage() {
    const { data, refetch } = useQuery(FETCH_BOARDS);
    // const [search, setSearch] = useState("");
    const [keyword, setKeyword] = useState("");

    console.log(data);

    const onClickPage = (e) => {
        // 검색에서 refetch할 때, search 검색어가 refetch에 저장되어 있는 상태이므로, 여기서 굳이 search를 추가 안해도 됨
        refetch({
            page: Number(e.currentTarget.id),
        });
    };

    const getDebounce = _.debounce((value) => {
        refetch({ search: value, page: 1 });
        setKeyword(value);
    }, 500);

    const onChangeSearch = (e) => {
        getDebounce(e.target.value);
    };

    // const onClickSearch = (e) => {
    //     refetch({ search, page: 1 });
    // };

    return (
        <div>
            검색어 입력 : <input type="text" onChange={onChangeSearch} />
            {/* <button onClick={onClickSearch}>검색하기</button> */}
            {data?.fetchBoards.map((d) => (
                <div key={d._id}>
                    <span style={{ margin: "10px" }}>
                        제목 :
                        {d.title
                            .replaceAll(keyword, `@#$${keyword}@#$`)
                            .split("@#$")
                            .map((el, idx) => (
                                <span
                                    key={`${el}_${idx}`}
                                    style={{ color: el === keyword ? "red" : "black" }}
                                >
                                    {el}
                                </span>
                            ))}
                    </span>
                    <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                </div>
            ))}
            {new Array(10).fill("철수").map((_, idx) => (
                <span key={idx + 1} id={String(idx + 1)} onClick={onClickPage}>
                    {idx + 1}
                </span>
            ))}
        </div>
    );
}
