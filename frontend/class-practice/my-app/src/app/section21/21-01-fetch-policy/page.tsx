"use client";

import FetchPolicyExample from "@/components/21-01-fetch-policy";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FETCH_BOARDS = gql`
    query fetchBoards2101_2 {
        fetchBoards {
            _id
            writer
        }
    }
`;

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const onClickIsOpen = () => {
        setIsOpen(true);
    };
    const onClickMove = () => {
        router.push("/section21/21-01-fetch-policy-moved");
    };

    return (
        <div>
            <button onClick={onClickIsOpen}>1. 버튼 클릭시 새로운 컴포넌트 등장</button>
            {isOpen && <FetchPolicyExample />}
            <br />
            =====================================================
            <br />
            <button onClick={onClickMove}>2. 버튼 클릭시 페이지 이동</button>
        </div>
    );
}
