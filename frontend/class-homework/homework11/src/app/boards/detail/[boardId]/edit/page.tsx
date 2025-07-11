"use client";

import { BoardsWrite } from "@/components/boards-write";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            writer
            title
            contents
            youtubeUrl
            likeCount
            dislikeCount
            # images
            # boardAddress {
            #     _id
            #     zipcode
            #     address
            #     addressDetail
            #     createdAt
            #     updatedAt
            #     deletedAt
            # }
            # user {
            #     _id
            #     email
            #     name
            #     picture
            #     userPoint {
            #         _id
            #         amount
            #         user
            #         createdAt
            #         updatedAt
            #         deletedAt
            #     }
            #     createdAt
            #     updatedAt
            #     deletedAt
            # }
            createdAt
            updatedAt
            deletedAt
        }
    }
`;

const BoardEdit = () => {
    const params = useParams();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: params.boardId },
    });
    return <BoardsWrite isEdit={true} data={data} />;
};

export default BoardEdit;
