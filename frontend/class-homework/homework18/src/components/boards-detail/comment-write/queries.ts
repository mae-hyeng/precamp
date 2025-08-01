import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENT = gql`
    mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
        createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {
            _id
            writer
            contents
            rating
            # user {}
            createdAt
            updatedAt
            deletedAt
        }
    }
`;

export const FETCH_BOARD_COMMENTS = gql`
    query fetchBoardComments(
        # $page: Int,
        $boardId: ID!
    ) {
        fetchBoardComments(
            # page: $page,
            boardId: $boardId
        ) {
            _id
            writer
            contents
            rating
            # user
            createdAt
            updatedAt
            deletedAt
        }
    }
`;

export const UPDATE_BOARD_COMMENT = gql`
    mutation updateBoardComment(
        $updateBoardCommentInput: UpdateBoardCommentInput!
        $password: String
        $boardCommentId: ID!
    ) {
        updateBoardComment(
            updateBoardCommentInput: $updateBoardCommentInput
            password: $password
            boardCommentId: $boardCommentId
        ) {
            _id
            writer
            contents
            rating
            # user
            createdAt
            updatedAt
            deletedAt
        }
    }
`;
