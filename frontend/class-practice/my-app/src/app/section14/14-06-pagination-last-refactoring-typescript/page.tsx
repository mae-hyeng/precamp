"use client";

import List from "@/components/14-06-pagination-last-refactoring-typescript/list/page";
import Pagination from "@/components/14-06-pagination-last-refactoring-typescript/pagination/index";
import {
    FETCH_BOARDS,
    FETCH_BOARDS_COUNT,
} from "@/components/14-05-pagination-last-refactoring/pagination/queries";
import { useQuery } from "@apollo/client";

export default function StaticRoutingMovedPage() {
    const { data, refetch } = useQuery(FETCH_BOARDS);

    const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

    const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

    console.log(data);

    return (
        <div>
            <List data={data} />
            <Pagination refetch={refetch} lastPage={lastPage} />
        </div>
    );
}
