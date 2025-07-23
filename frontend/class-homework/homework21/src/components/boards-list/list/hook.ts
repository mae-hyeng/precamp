"use client";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { FETCH_BOARDS } from "./queries";
import { DeleteBoardDocument } from "@/commons/graphql/graphql";
import { ChangeEvent, useState } from "react";
import _ from "lodash";

export const BoardsList = ({ refetch }) => {
    const router = useRouter();
    const [deleteBoard] = useMutation(DeleteBoardDocument);

    const [keyword, setKeyword] = useState("");

    const [endDate, setEndDate] = useState(
        new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toLocaleDateString()
    );
    const [startDate, setStartDate] = useState(new Date().toLocaleDateString());

    const onClickBoard = (boardId) => {
        router.push(`/boards/detail/${boardId}`);
    };

    const onClickDeleteBoard = (boardId) => {
        if (confirm("정말 삭제하시겠습니까?")) {
            deleteBoard({
                variables: {
                    boardId: boardId,
                },
                refetchQueries: [{ query: FETCH_BOARDS }],
            });
        }
    };

    const onClickRegister = () => {
        router.push("/boards/new");
    };

    const getDebounce = _.debounce((value, start, end) => {
        refetch({ search: value, endDate: end, startDate: start, page: 1 });
        setKeyword(value);
    }, 500);

    const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        getDebounce(e.target.value, startDate, endDate);
    };

    const onChangeDatePicker = (_, dateString) => {
        const [start, end] = dateString;
        setStartDate(start);
        setEndDate(end);
        refetch({ search: keyword, endDate: end, startDate: start, page: 1 });
    };

    return {
        keyword,
        onClickBoard,
        onClickDeleteBoard,
        onClickRegister,
        onChangeKeyword,
        onChangeDatePicker,
    };
};
