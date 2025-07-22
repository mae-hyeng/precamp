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
    "\n    query fetchBoards($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoardsDocument,
    "\n    query fetchBoardsCount {\n        fetchBoardsCount\n    }\n": typeof types.FetchBoardsCountDocument,
    "\n    mutation uploadFile($file: Upload!) {\n        uploadFile(file: $file) {\n            url\n        }\n    }\n": typeof types.UploadFileDocument,
    "\n    mutation createBoard($createBoardInput: CreateBoardInput!) {\n        createBoard(createBoardInput: $createBoardInput) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.CreateBoardDocument,
};
const documents: Documents = {
    "\n    query fetchBoards($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoardsDocument,
    "\n    query fetchBoardsCount {\n        fetchBoardsCount\n    }\n": types.FetchBoardsCountDocument,
    "\n    mutation uploadFile($file: Upload!) {\n        uploadFile(file: $file) {\n            url\n        }\n    }\n": types.UploadFileDocument,
    "\n    mutation createBoard($createBoardInput: CreateBoardInput!) {\n        createBoard(createBoardInput: $createBoardInput) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n": types.CreateBoardDocument,
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
export function graphql(source: "\n    query fetchBoards($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoards($page: Int) {\n        fetchBoards(page: $page) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoardsCount {\n        fetchBoardsCount\n    }\n"): (typeof documents)["\n    query fetchBoardsCount {\n        fetchBoardsCount\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation uploadFile($file: Upload!) {\n        uploadFile(file: $file) {\n            url\n        }\n    }\n"): (typeof documents)["\n    mutation uploadFile($file: Upload!) {\n        uploadFile(file: $file) {\n            url\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createBoard($createBoardInput: CreateBoardInput!) {\n        createBoard(createBoardInput: $createBoardInput) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    mutation createBoard($createBoardInput: CreateBoardInput!) {\n        createBoard(createBoardInput: $createBoardInput) {\n            _id\n            writer\n            title\n            contents\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;