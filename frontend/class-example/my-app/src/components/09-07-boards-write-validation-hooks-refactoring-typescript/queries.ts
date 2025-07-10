import { gql } from "@apollo/client";

export const myGraphqlSetting = gql`
    mutation createBoard($myWriter: String, $myTitle: String, $myContents: String) {
        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {
            _id
            number
            message
        }
    }
`;

export const UPDATE_BOARD = gql`
    mutation updateBoard($myNumber: Int, $myWriter: String, $myTitle: String, $myContents: String) {
        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {
            _id
            number
            message
        }
    }
`;
