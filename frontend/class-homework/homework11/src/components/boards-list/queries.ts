import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            _id
            writer
            title
            contents
            youtubeUrl
            likeCount
            dislikeCount
            # images
            boardAddress {
                _id
                zipcode
                address
                addressDetail
                createdAt
                updatedAt
                deletedAt
            }
            # user
            createdAt
            updatedAt
            deletedAt
        }
    }
`;

export const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!) {
        deleteBoard(boardId: $boardId)
    }
`;
