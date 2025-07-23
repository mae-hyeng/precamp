import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
    query fetchBoardsPaginationLastRefactoringTypeScript($page: Int) {
        fetchBoards(page: $page) {
            _id
            writer
            title
            contents
        }
    }
`;

export const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
        fetchBoardsCount
    }
`;
