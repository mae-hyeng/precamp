"use client";

import { BannerPage } from "@/components/boards-list/banner";
import { BoardsListPage } from "@/components/boards-list/list";
import { FETCH_BOARDS } from "@/components/boards-list/list/queries";
import { useQuery } from "@apollo/client";

const Page = () => {
    const { data } = useQuery(FETCH_BOARDS);

    return (
        <>
            <BannerPage />
            <BoardsListPage data={data} />
        </>
    );
};

export default Page;
