import { IPaginationProps } from "./../pagination/types";
import { FetchBoardsQuery } from "@/commons/graphql/graphql";

export type IBoardListProps = {
    data?: FetchBoardsQuery;
} & IPaginationProps;
