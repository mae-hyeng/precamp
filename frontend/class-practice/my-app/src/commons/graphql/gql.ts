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
    "\n    mutation createBoard0603($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.CreateBoard0603Document,
    "\n    mutation createBoard0604($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.CreateBoard0604Document,
    "\n    mutation createBoard0605($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.CreateBoard0605Document,
    "\n    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {\n        createProduct(seller: $seller, createProductInput: $createProductInput) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.CreateProductDocument,
    "\n    query fetchBoard0703($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoard0703Document,
    "\n    query fetchBoard0704($number: Int) {\n        fetchBoard(number: $number) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoard0704Document,
    "\n    mutation createBoard0704($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.CreateBoard0704Document,
    "\n    mutation deleteBoard($number: Int) {\n        deleteBoard(number: $number) {\n            message\n        }\n    }\n": typeof types.DeleteBoardDocument,
    "\n    query fetchBoard0903($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoard0903Document,
    "\n    query fetchBoard0904($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoard0904Document,
    "\n    query fetchBoard0905($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoard0905Document,
    "\n    query fetchBoard0906($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoard0906Document,
    "\n    query fetchBoard0907($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoard0907Document,
    "\n    mutation createBoard1001($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.CreateBoard1001Document,
    "\n    query fetchBoard1002($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoard1002Document,
    "\n    query fetchBoards {\n        fetchBoards {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": typeof types.FetchBoardsDocument,
    "\n    mutation createBoard0903($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.CreateBoard0903Document,
    "\n    mutation updateBoard0903(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.UpdateBoard0903Document,
    "\n    mutation createBoard0904($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.CreateBoard0904Document,
    "\n    mutation updateBoard0904(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.UpdateBoard0904Document,
    "\n    mutation createBoard0905($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.CreateBoard0905Document,
    "\n    mutation updateBoard0905(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.UpdateBoard0905Document,
    "\n    mutation createBoard0906($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.CreateBoard0906Document,
    "\n    mutation updateBoard0906(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.UpdateBoard0906Document,
    "\n    mutation createBoard0907($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.CreateBoard0907Document,
    "\n    mutation updateBoard0907(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": typeof types.UpdateBoard0907Document,
};
const documents: Documents = {
    "\n    mutation createBoard0603($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n": types.CreateBoard0603Document,
    "\n    mutation createBoard0604($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n": types.CreateBoard0604Document,
    "\n    mutation createBoard0605($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n": types.CreateBoard0605Document,
    "\n    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {\n        createProduct(seller: $seller, createProductInput: $createProductInput) {\n            _id\n            number\n            message\n        }\n    }\n": types.CreateProductDocument,
    "\n    query fetchBoard0703($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoard0703Document,
    "\n    query fetchBoard0704($number: Int) {\n        fetchBoard(number: $number) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoard0704Document,
    "\n    mutation createBoard0704($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n": types.CreateBoard0704Document,
    "\n    mutation deleteBoard($number: Int) {\n        deleteBoard(number: $number) {\n            message\n        }\n    }\n": types.DeleteBoardDocument,
    "\n    query fetchBoard0903($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoard0903Document,
    "\n    query fetchBoard0904($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoard0904Document,
    "\n    query fetchBoard0905($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoard0905Document,
    "\n    query fetchBoard0906($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoard0906Document,
    "\n    query fetchBoard0907($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoard0907Document,
    "\n    mutation createBoard1001($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n": types.CreateBoard1001Document,
    "\n    query fetchBoard1002($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoard1002Document,
    "\n    query fetchBoards {\n        fetchBoards {\n            number\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoardsDocument,
    "\n    mutation createBoard0903($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": types.CreateBoard0903Document,
    "\n    mutation updateBoard0903(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": types.UpdateBoard0903Document,
    "\n    mutation createBoard0904($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": types.CreateBoard0904Document,
    "\n    mutation updateBoard0904(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": types.UpdateBoard0904Document,
    "\n    mutation createBoard0905($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": types.CreateBoard0905Document,
    "\n    mutation updateBoard0905(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": types.UpdateBoard0905Document,
    "\n    mutation createBoard0906($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": types.CreateBoard0906Document,
    "\n    mutation updateBoard0906(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": types.UpdateBoard0906Document,
    "\n    mutation createBoard0907($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": types.CreateBoard0907Document,
    "\n    mutation updateBoard0907(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n": types.UpdateBoard0907Document,
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
export function graphql(source: "\n    mutation createBoard0603($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation createBoard0603($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createBoard0604($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation createBoard0604($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createBoard0605($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation createBoard0605($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {\n        createProduct(seller: $seller, createProductInput: $createProductInput) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {\n        createProduct(seller: $seller, createProductInput: $createProductInput) {\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoard0703($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoard0703($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoard0704($number: Int) {\n        fetchBoard(number: $number) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoard0704($number: Int) {\n        fetchBoard(number: $number) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createBoard0704($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation createBoard0704($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deleteBoard($number: Int) {\n        deleteBoard(number: $number) {\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation deleteBoard($number: Int) {\n        deleteBoard(number: $number) {\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoard0903($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoard0903($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoard0904($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoard0904($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoard0905($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoard0905($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoard0906($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoard0906($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoard0907($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoard0907($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createBoard1001($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation createBoard1001($myWriter: String, $myTitle: String, $myContent: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContent) {\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoard1002($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoard1002($page: Int) {\n        fetchBoard(number: $page) {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoards {\n        fetchBoards {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoards {\n        fetchBoards {\n            number\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createBoard0903($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation createBoard0903($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updateBoard0903(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation updateBoard0903(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createBoard0904($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation createBoard0904($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updateBoard0904(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation updateBoard0904(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createBoard0905($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation createBoard0905($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updateBoard0905(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation updateBoard0905(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createBoard0906($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation createBoard0906($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updateBoard0906(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation updateBoard0906(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createBoard0907($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation createBoard0907($myWriter: String, $myTitle: String, $myContents: String) {\n        createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updateBoard0907(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation updateBoard0907(\n        $myNumber: Int\n        $myWriter: String\n        $myTitle: String\n        $myContents: String\n    ) {\n        updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {\n            _id\n            number\n            message\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;