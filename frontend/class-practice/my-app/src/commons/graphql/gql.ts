/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    query fetchBoards1401Pagination($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoards1401PaginationDocument,
    "\n    query fetchBoards1402($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoards1402Document,
    "\n    query fetchBoards1403($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoards1403Document,
    "\n    query fetchBoardsCount {\n        fetchBoardsCount\n    }\n": typeof types.FetchBoardsCountDocument,
    "\n    query fetchBoards1502($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoards1502Document,
    "\n    query fetchBoards1503($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoards1503Document,
    "\n    query fetchBoards1504($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoards1504Document,
    "\n    query fetchBoards1506($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoards1506Document,
    "\n    mutation uploadFile($file: Upload!) {\n        uploadFile(file: $file) {\n            url\n        }\n    }\n": typeof types.UploadFileDocument,
    "\n    mutation createBoard($createBoardInput: CreateBoardInput!) {\n        createBoard(createBoardInput: $createBoardInput) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.CreateBoardDocument,
    "\n    query fetchBoards1901($page: Int, $search: String) {\n        fetchBoards(page: $page, search: $search) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoards1901Document,
    "\n    query fetchBoardsSearchWithDebouncing($page: Int, $search: String) {\n        fetchBoards(page: $page, search: $search) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoardsSearchWithDebouncingDocument,
    "\n    query fetchBoardsSearchWithDebouncingKeyword($page: Int, $search: String) {\n        fetchBoards(page: $page, search: $search) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoardsSearchWithDebouncingKeywordDocument,
    "\n    query fetchBoards2101 {\n        fetchBoards {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoards2101Document,
    "\n    query fetchBoards2101_2 {\n        fetchBoards {\n            _id\n            writer\n        }\n    }\n": typeof types.FetchBoards2101_2Document,
    "\n    query fetchBoards2102 {\n        fetchBoards {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoards2102Document,
    "\n    query fetchUserLoggedIn {\n        fetchUserLoggedIn {\n            _id\n            email\n            name\n        }\n    }\n": typeof types.FetchUserLoggedInDocument,
    "\n    mutation loginUser($email: String!, $password: String!) {\n        loginUser(email: $email, password: $password) {\n            accessToken\n        }\n    }\n": typeof types.LoginUserDocument,
    "\n    query fetchBoards2303($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoards2303Document,
    "\n    query fetchBoardsPaginationLastRefactoring($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoardsPaginationLastRefactoringDocument,
    "\n    query fetchBoardsPaginationLastRefactoringTypeScript($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoardsPaginationLastRefactoringTypeScriptDocument,
    "\n    query fetchBoards2101_3 {\n        fetchBoards {\n            _id\n            writer\n            title\n        }\n    }\n": typeof types.FetchBoards2101_3Document,
};
const documents: Documents = {
    "\n    query fetchBoards1401Pagination($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoards1401PaginationDocument,
    "\n    query fetchBoards1402($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoards1402Document,
    "\n    query fetchBoards1403($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoards1403Document,
    "\n    query fetchBoardsCount {\n        fetchBoardsCount\n    }\n": types.FetchBoardsCountDocument,
    "\n    query fetchBoards1502($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoards1502Document,
    "\n    query fetchBoards1503($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoards1503Document,
    "\n    query fetchBoards1504($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoards1504Document,
    "\n    query fetchBoards1506($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoards1506Document,
    "\n    mutation uploadFile($file: Upload!) {\n        uploadFile(file: $file) {\n            url\n        }\n    }\n": types.UploadFileDocument,
    "\n    mutation createBoard($createBoardInput: CreateBoardInput!) {\n        createBoard(createBoardInput: $createBoardInput) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.CreateBoardDocument,
    "\n    query fetchBoards1901($page: Int, $search: String) {\n        fetchBoards(page: $page, search: $search) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoards1901Document,
    "\n    query fetchBoardsSearchWithDebouncing($page: Int, $search: String) {\n        fetchBoards(page: $page, search: $search) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoardsSearchWithDebouncingDocument,
    "\n    query fetchBoardsSearchWithDebouncingKeyword($page: Int, $search: String) {\n        fetchBoards(page: $page, search: $search) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoardsSearchWithDebouncingKeywordDocument,
    "\n    query fetchBoards2101 {\n        fetchBoards {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoards2101Document,
    "\n    query fetchBoards2101_2 {\n        fetchBoards {\n            _id\n            writer\n        }\n    }\n": types.FetchBoards2101_2Document,
    "\n    query fetchBoards2102 {\n        fetchBoards {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoards2102Document,
    "\n    query fetchUserLoggedIn {\n        fetchUserLoggedIn {\n            _id\n            email\n            name\n        }\n    }\n": types.FetchUserLoggedInDocument,
    "\n    mutation loginUser($email: String!, $password: String!) {\n        loginUser(email: $email, password: $password) {\n            accessToken\n        }\n    }\n": types.LoginUserDocument,
    "\n    query fetchBoards2303($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoards2303Document,
    "\n    query fetchBoardsPaginationLastRefactoring($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoardsPaginationLastRefactoringDocument,
    "\n    query fetchBoardsPaginationLastRefactoringTypeScript($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoardsPaginationLastRefactoringTypeScriptDocument,
    "\n    query fetchBoards2101_3 {\n        fetchBoards {\n            _id\n            writer\n            title\n        }\n    }\n": types.FetchBoards2101_3Document,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoards1401Pagination($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoards1401Pagination($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoards1402($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoards1402($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoards1403($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoards1403($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoardsCount {\n        fetchBoardsCount\n    }\n"): (typeof documents)["\n    query fetchBoardsCount {\n        fetchBoardsCount\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoards1502($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoards1502($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoards1503($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoards1503($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoards1504($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoards1504($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoards1506($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoards1506($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation uploadFile($file: Upload!) {\n        uploadFile(file: $file) {\n            url\n        }\n    }\n"): (typeof documents)["\n    mutation uploadFile($file: Upload!) {\n        uploadFile(file: $file) {\n            url\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createBoard($createBoardInput: CreateBoardInput!) {\n        createBoard(createBoardInput: $createBoardInput) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    mutation createBoard($createBoardInput: CreateBoardInput!) {\n        createBoard(createBoardInput: $createBoardInput) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoards1901($page: Int, $search: String) {\n        fetchBoards(page: $page, search: $search) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoards1901($page: Int, $search: String) {\n        fetchBoards(page: $page, search: $search) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoardsSearchWithDebouncing($page: Int, $search: String) {\n        fetchBoards(page: $page, search: $search) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoardsSearchWithDebouncing($page: Int, $search: String) {\n        fetchBoards(page: $page, search: $search) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoardsSearchWithDebouncingKeyword($page: Int, $search: String) {\n        fetchBoards(page: $page, search: $search) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoardsSearchWithDebouncingKeyword($page: Int, $search: String) {\n        fetchBoards(page: $page, search: $search) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoards2101 {\n        fetchBoards {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoards2101 {\n        fetchBoards {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoards2101_2 {\n        fetchBoards {\n            _id\n            writer\n        }\n    }\n"): (typeof documents)["\n    query fetchBoards2101_2 {\n        fetchBoards {\n            _id\n            writer\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoards2102 {\n        fetchBoards {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoards2102 {\n        fetchBoards {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchUserLoggedIn {\n        fetchUserLoggedIn {\n            _id\n            email\n            name\n        }\n    }\n"): (typeof documents)["\n    query fetchUserLoggedIn {\n        fetchUserLoggedIn {\n            _id\n            email\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation loginUser($email: String!, $password: String!) {\n        loginUser(email: $email, password: $password) {\n            accessToken\n        }\n    }\n"): (typeof documents)["\n    mutation loginUser($email: String!, $password: String!) {\n        loginUser(email: $email, password: $password) {\n            accessToken\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoards2303($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoards2303($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoardsPaginationLastRefactoring($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoardsPaginationLastRefactoring($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoardsPaginationLastRefactoringTypeScript($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoardsPaginationLastRefactoringTypeScript($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoards2101_3 {\n        fetchBoards {\n            _id\n            writer\n            title\n        }\n    }\n"): (typeof documents)["\n    query fetchBoards2101_3 {\n        fetchBoards {\n            _id\n            writer\n            title\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;