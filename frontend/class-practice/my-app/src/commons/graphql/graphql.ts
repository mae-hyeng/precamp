/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Board = {
  __typename?: 'Board';
  _id: Scalars['ID']['output'];
  boardAddress?: Maybe<BoardAddress>;
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  dislikeCount: Scalars['Int']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  likeCount: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  writer?: Maybe<Scalars['String']['output']>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};

export type BoardAddress = {
  __typename?: 'BoardAddress';
  _id: Scalars['ID']['output'];
  address?: Maybe<Scalars['String']['output']>;
  addressDetail?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type BoardAddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  addressDetail?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type BoardComment = {
  __typename?: 'BoardComment';
  _id: Scalars['ID']['output'];
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  rating: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  writer?: Maybe<Scalars['String']['output']>;
};

export type CreateBoardCommentInput = {
  contents: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Float']['input'];
  writer?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBoardInput = {
  boardAddress?: InputMaybe<BoardAddressInput>;
  contents: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  password?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  writer?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTravelproductInput = {
  contents: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  remarks: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  travelproductAddress?: InputMaybe<TravelproductAddressInput>;
};

export type CreateTravelproductQuestionAnswerInput = {
  contents: Scalars['String']['input'];
};

export type CreateTravelproductQuestionInput = {
  contents: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type FileManager = {
  __typename?: 'FileManager';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  isUsed: Scalars['Boolean']['output'];
  size?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBoard: Board;
  createBoardComment: BoardComment;
  createPointTransactionOfBuyingAndSelling: Travelproduct;
  createPointTransactionOfLoading: PointTransaction;
  createTravelproduct: Travelproduct;
  createTravelproductQuestion: TravelproductQuestion;
  createTravelproductQuestionAnswer: TravelproductQuestionAnswer;
  createUser: User;
  deleteBoard: Scalars['ID']['output'];
  deleteBoardComment: Scalars['ID']['output'];
  deleteBoards: Array<Scalars['ID']['output']>;
  deleteTravelproduct: Scalars['ID']['output'];
  deleteTravelproductQuestion: Scalars['ID']['output'];
  deleteTravelproductQuestionAnswer: Scalars['String']['output'];
  dislikeBoard: Scalars['Int']['output'];
  likeBoard: Scalars['Int']['output'];
  loginUser: Token;
  loginUserExample: Token;
  logoutUser: Scalars['Boolean']['output'];
  resetUserPassword: Scalars['Boolean']['output'];
  restoreAccessToken: Token;
  toggleTravelproductPick: Scalars['Int']['output'];
  updateBoard: Board;
  updateBoardComment: BoardComment;
  updateTravelproduct: Travelproduct;
  updateTravelproductQuestion: TravelproductQuestion;
  updateTravelproductQuestionAnswer: TravelproductQuestionAnswer;
  updateUser: User;
  uploadFile: FileManager;
};


export type MutationCreateBoardArgs = {
  createBoardInput: CreateBoardInput;
};


export type MutationCreateBoardCommentArgs = {
  boardId: Scalars['ID']['input'];
  createBoardCommentInput: CreateBoardCommentInput;
};


export type MutationCreatePointTransactionOfBuyingAndSellingArgs = {
  useritemId: Scalars['ID']['input'];
};


export type MutationCreatePointTransactionOfLoadingArgs = {
  paymentId: Scalars['ID']['input'];
};


export type MutationCreateTravelproductArgs = {
  createTravelproductInput: CreateTravelproductInput;
};


export type MutationCreateTravelproductQuestionArgs = {
  createTravelproductQuestionInput: CreateTravelproductQuestionInput;
  travelproductId: Scalars['ID']['input'];
};


export type MutationCreateTravelproductQuestionAnswerArgs = {
  createTravelproductQuestionAnswerInput: CreateTravelproductQuestionAnswerInput;
  travelproductQuestionId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type MutationDeleteBoardCommentArgs = {
  boardCommentId: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteBoardsArgs = {
  boardIds: Array<Scalars['ID']['input']>;
};


export type MutationDeleteTravelproductArgs = {
  travelproductId: Scalars['ID']['input'];
};


export type MutationDeleteTravelproductQuestionArgs = {
  travelproductQuestionId: Scalars['ID']['input'];
};


export type MutationDeleteTravelproductQuestionAnswerArgs = {
  travelproductQuestionAnswerId: Scalars['ID']['input'];
};


export type MutationDislikeBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type MutationLikeBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLoginUserExampleArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationResetUserPasswordArgs = {
  password: Scalars['String']['input'];
};


export type MutationToggleTravelproductPickArgs = {
  travelproductId: Scalars['ID']['input'];
};


export type MutationUpdateBoardArgs = {
  boardId: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  updateBoardInput: UpdateBoardInput;
};


export type MutationUpdateBoardCommentArgs = {
  boardCommentId: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  updateBoardCommentInput: UpdateBoardCommentInput;
};


export type MutationUpdateTravelproductArgs = {
  travelproductId: Scalars['ID']['input'];
  updateTravelproductInput: UpdateTravelproductInput;
};


export type MutationUpdateTravelproductQuestionArgs = {
  travelproductQuestionId: Scalars['ID']['input'];
  updateTravelproductQuestionInput: UpdateTravelproductQuestionInput;
};


export type MutationUpdateTravelproductQuestionAnswerArgs = {
  travelproductQuestionAnswerId: Scalars['ID']['input'];
  updateTravelproductQuestionAnswerInput: UpdateTravelproductQuestionAnswerInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};

export type PointTransaction = {
  __typename?: 'PointTransaction';
  _id: Scalars['ID']['output'];
  amount: Scalars['Int']['output'];
  balance: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  impUid?: Maybe<Scalars['ID']['output']>;
  status: Scalars['String']['output'];
  statusDetail: Scalars['String']['output'];
  travelproduct?: Maybe<Travelproduct>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  fetchBoard: Board;
  fetchBoardComments: Array<BoardComment>;
  fetchBoards: Array<Board>;
  fetchBoardsCount: Scalars['Int']['output'];
  fetchBoardsCountOfMine: Scalars['Int']['output'];
  fetchBoardsOfMine: Array<Board>;
  fetchBoardsOfTheBest: Array<Board>;
  fetchPointTransactions: Array<PointTransaction>;
  fetchPointTransactionsCountOfBuying: Scalars['Int']['output'];
  fetchPointTransactionsCountOfLoading: Scalars['Int']['output'];
  fetchPointTransactionsCountOfSelling: Scalars['Int']['output'];
  fetchPointTransactionsOfBuying: Array<PointTransaction>;
  fetchPointTransactionsOfLoading: Array<PointTransaction>;
  fetchPointTransactionsOfSelling: Array<PointTransaction>;
  fetchTravelproduct: Travelproduct;
  fetchTravelproductQuestionAnswers: Array<TravelproductQuestionAnswer>;
  fetchTravelproductQuestions: Array<TravelproductQuestion>;
  fetchTravelproducts: Array<Travelproduct>;
  fetchTravelproductsCountIBought: Scalars['Int']['output'];
  fetchTravelproductsCountIPicked: Scalars['Int']['output'];
  fetchTravelproductsCountISold: Scalars['Int']['output'];
  fetchTravelproductsIBought: Array<Travelproduct>;
  fetchTravelproductsIPicked: Array<Travelproduct>;
  fetchTravelproductsISold: Array<Travelproduct>;
  fetchTravelproductsOfTheBest: Array<Travelproduct>;
  fetchUser: User;
  fetchUserLoggedIn: User;
};


export type QueryFetchBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type QueryFetchBoardCommentsArgs = {
  boardId: Scalars['ID']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchBoardsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryFetchBoardsCountArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryFetchPointTransactionsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchPointTransactionsOfBuyingArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchPointTransactionsOfLoadingArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchPointTransactionsOfSellingArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchTravelproductArgs = {
  travelproductId: Scalars['ID']['input'];
};


export type QueryFetchTravelproductQuestionAnswersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  travelproductQuestionId: Scalars['ID']['input'];
};


export type QueryFetchTravelproductQuestionsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  travelproductId: Scalars['ID']['input'];
};


export type QueryFetchTravelproductsArgs = {
  isSoldout?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchTravelproductsIBoughtArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchTravelproductsIPickedArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchTravelproductsISoldArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchUserArgs = {
  email: Scalars['String']['input'];
};

export type Token = {
  __typename?: 'Token';
  accessToken: Scalars['String']['output'];
};

export type Travelproduct = {
  __typename?: 'Travelproduct';
  _id: Scalars['ID']['output'];
  buyer?: Maybe<User>;
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  pickedCount?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  remarks: Scalars['String']['output'];
  seller?: Maybe<User>;
  soldAt?: Maybe<Scalars['DateTime']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  travelproductAddress?: Maybe<TravelproductAddress>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TravelproductAddress = {
  __typename?: 'TravelproductAddress';
  _id: Scalars['ID']['output'];
  address?: Maybe<Scalars['String']['output']>;
  addressDetail?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type TravelproductAddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  addressDetail?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type TravelproductQuestion = {
  __typename?: 'TravelproductQuestion';
  _id: Scalars['ID']['output'];
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  travelproduct: Travelproduct;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type TravelproductQuestionAnswer = {
  __typename?: 'TravelproductQuestionAnswer';
  _id: Scalars['ID']['output'];
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  travelproductQuestion: TravelproductQuestion;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type UpdateBoardCommentInput = {
  contents?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateBoardInput = {
  boardAddress?: InputMaybe<BoardAddressInput>;
  contents?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTravelproductInput = {
  contents?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  travelproductAddress?: InputMaybe<TravelproductAddressInput>;
};

export type UpdateTravelproductQuestionAnswerInput = {
  contents: Scalars['String']['input'];
};

export type UpdateTravelproductQuestionInput = {
  contents: Scalars['String']['input'];
};

export type UpdateUserInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userPoint?: Maybe<UserPoint>;
};

export type UserPoint = {
  __typename?: 'UserPoint';
  _id: Scalars['ID']['output'];
  amount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type FetchBoards1401PaginationQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchBoards1401PaginationQuery = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string }> };

export type FetchBoards1402QueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchBoards1402Query = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string }> };

export type FetchBoards1403QueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchBoards1403Query = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string }> };

export type FetchBoardsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchBoardsCountQuery = { __typename?: 'Query', fetchBoardsCount: number };

export type FetchBoards1502QueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchBoards1502Query = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string }> };

export type FetchBoards1503QueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchBoards1503Query = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string }> };

export type FetchBoards1504QueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchBoards1504Query = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string }> };

export type FetchBoards1506QueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchBoards1506Query = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string }> };

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type UploadFileMutation = { __typename?: 'Mutation', uploadFile: { __typename?: 'FileManager', url: string } };

export type CreateBoardMutationVariables = Exact<{
  createBoardInput: CreateBoardInput;
}>;


export type CreateBoardMutation = { __typename?: 'Mutation', createBoard: { __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string } };

export type FetchBoards1901QueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchBoards1901Query = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string }> };

export type FetchBoardsSearchWithDebouncingQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchBoardsSearchWithDebouncingQuery = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string }> };

export type FetchBoardsSearchWithDebouncingKeywordQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchBoardsSearchWithDebouncingKeywordQuery = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string }> };

export type FetchBoards2101QueryVariables = Exact<{ [key: string]: never; }>;


export type FetchBoards2101Query = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string }> };

export type FetchBoards2101_2QueryVariables = Exact<{ [key: string]: never; }>;


export type FetchBoards2101_2Query = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null }> };

export type FetchBoards2102QueryVariables = Exact<{ [key: string]: never; }>;


export type FetchBoards2102Query = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string }> };

export type FetchUserLoggedInQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchUserLoggedInQuery = { __typename?: 'Query', fetchUserLoggedIn: { __typename?: 'User', _id: string, email: string, name: string } };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'Token', accessToken: string } };

export type FetchBoards2303QueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchBoards2303Query = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string }> };

export type FetchBoardsPaginationLastRefactoringQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchBoardsPaginationLastRefactoringQuery = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string }> };

export type FetchBoardsPaginationLastRefactoringTypeScriptQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchBoardsPaginationLastRefactoringTypeScriptQuery = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string }> };

export type FetchBoards2101_3QueryVariables = Exact<{ [key: string]: never; }>;


export type FetchBoards2101_3Query = { __typename?: 'Query', fetchBoards: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string }> };


export const FetchBoards1401PaginationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoards1401Pagination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<FetchBoards1401PaginationQuery, FetchBoards1401PaginationQueryVariables>;
export const FetchBoards1402Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoards1402"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<FetchBoards1402Query, FetchBoards1402QueryVariables>;
export const FetchBoards1403Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoards1403"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<FetchBoards1403Query, FetchBoards1403QueryVariables>;
export const FetchBoardsCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoardsCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoardsCount"}}]}}]} as unknown as DocumentNode<FetchBoardsCountQuery, FetchBoardsCountQueryVariables>;
export const FetchBoards1502Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoards1502"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<FetchBoards1502Query, FetchBoards1502QueryVariables>;
export const FetchBoards1503Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoards1503"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<FetchBoards1503Query, FetchBoards1503QueryVariables>;
export const FetchBoards1504Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoards1504"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<FetchBoards1504Query, FetchBoards1504QueryVariables>;
export const FetchBoards1506Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoards1506"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<FetchBoards1506Query, FetchBoards1506QueryVariables>;
export const UploadFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<UploadFileMutation, UploadFileMutationVariables>;
export const CreateBoardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createBoard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createBoardInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBoardInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBoard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createBoardInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createBoardInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<CreateBoardMutation, CreateBoardMutationVariables>;
export const FetchBoards1901Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoards1901"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<FetchBoards1901Query, FetchBoards1901QueryVariables>;
export const FetchBoardsSearchWithDebouncingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoardsSearchWithDebouncing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<FetchBoardsSearchWithDebouncingQuery, FetchBoardsSearchWithDebouncingQueryVariables>;
export const FetchBoardsSearchWithDebouncingKeywordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoardsSearchWithDebouncingKeyword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<FetchBoardsSearchWithDebouncingKeywordQuery, FetchBoardsSearchWithDebouncingKeywordQueryVariables>;
export const FetchBoards2101Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoards2101"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<FetchBoards2101Query, FetchBoards2101QueryVariables>;
export const FetchBoards2101_2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoards2101_2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}}]}}]}}]} as unknown as DocumentNode<FetchBoards2101_2Query, FetchBoards2101_2QueryVariables>;
export const FetchBoards2102Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoards2102"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<FetchBoards2102Query, FetchBoards2102QueryVariables>;
export const FetchUserLoggedInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchUserLoggedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchUserLoggedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<FetchUserLoggedInQuery, FetchUserLoggedInQueryVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const FetchBoards2303Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoards2303"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<FetchBoards2303Query, FetchBoards2303QueryVariables>;
export const FetchBoardsPaginationLastRefactoringDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoardsPaginationLastRefactoring"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<FetchBoardsPaginationLastRefactoringQuery, FetchBoardsPaginationLastRefactoringQueryVariables>;
export const FetchBoardsPaginationLastRefactoringTypeScriptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoardsPaginationLastRefactoringTypeScript"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<FetchBoardsPaginationLastRefactoringTypeScriptQuery, FetchBoardsPaginationLastRefactoringTypeScriptQueryVariables>;
export const FetchBoards2101_3Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoards2101_3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<FetchBoards2101_3Query, FetchBoards2101_3QueryVariables>;