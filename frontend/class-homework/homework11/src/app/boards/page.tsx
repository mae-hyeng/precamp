"use client";

import { BoardsListPage } from "@/components/boards-list";
import { FETCH_BOARDS } from "@/components/boards-list/queries";
import { useQuery } from "@apollo/client";

const Page = () => {
    const { data } = useQuery(FETCH_BOARDS);

    return <BoardsListPage data={data} />;
};

export default Page;
