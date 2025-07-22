import { IPaginationProps } from "./../pagination/types";
import { FetchBoardQuery } from "@/commons/graphql/graphql";

export type IBoardListProps = {
    data?: FetchBoardQuery;
} & IPaginationProps;
