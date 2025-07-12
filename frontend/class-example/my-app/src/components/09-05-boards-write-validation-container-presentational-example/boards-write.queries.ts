import { gql } from "@apollo/client";

export const myGraphqlSetting = gql`
    mutation createBoard0905($myWriter: String, $myTitle: String, $myContents: String) {
        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {
            _id
            number
            message
        }
    }
`;

export const UPDATE_BOARD = gql`
    mutation updateBoard0905(
        $myNumber: Int
        $myWriter: String
        $myTitle: String
        $myContents: String
    ) {
        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {
            _id
            number
            message
        }
    }
`;
