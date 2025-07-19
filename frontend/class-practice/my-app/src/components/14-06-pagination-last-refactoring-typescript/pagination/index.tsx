"use client";

import { usePagination } from "./hook";
import { IPaginationProps } from "./types";

export default function Pagination({ refetch, lastPage }: IPaginationProps) {
    const { startPage, onClickPage, onClickPrevPage, onClickNextPage } = usePagination({
        refetch,
        lastPage,
    });
    // 12-11 shorthand-property 부분 참고

    return (
        <div>
            <span onClick={onClickPrevPage}>이전페이지</span>

            {new Array(10).fill("철수").map(
                (_, idx) =>
                    idx + startPage <= lastPage && (
                        <span
                            key={idx + startPage}
                            id={String(idx + startPage)}
                            onClick={onClickPage}
                            style={{ margin: "5px" }}
                        >
                            {idx + startPage}
                        </span>
                    )
            )}

            <span onClick={onClickNextPage}>다음페이지</span>
        </div>
    );
}
