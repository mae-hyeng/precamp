"use client";

import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
    query fetchBoards1401Pagination($page: Int) {
        fetchBoards(page: $page) {
            _id
            writer
            title
            contents
        }
    }
`;

const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!) {
        deleteBoard(boardId: $boardId)
    }
`;

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS);

    const [createBoard] = useMutation(CREATE_BOARD);
    const [deleteBoard] = useMutation(DELETE_BOARD);

    const onClickSubmit = async () => {
        await createBoard({
            variables: {
                createBoardInput: {
                    writer: "짱구",
                    password: "1234",
                    title: "제목입니다",
                    contents: "내용!",
                },
            },
            // refetchQueries: [{query: FETCH_BOARDS}]
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        fetchBoards: (prev) => {
                            return [data.createBoard, ...prev];
                        },
                    },
                });
            },
        });
    };

    const onClickDelete = (boardId) => async () => {
        await deleteBoard({
            variables: { boardId },
            // refetchQueries: [{query: FETCH_BOARDS}]
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        fetchBoards: (prev, { readField }) => {
                            console.log(prev);
                            const deletedId = data.deleteBoard; // _id(삭제 완료된 id)
                            const filteredPrev = prev.filter(
                                (el) => readField("_id", el) !== deletedId
                            );
                            return [...filteredPrev]; // 삭제된 id를 제외한 나머지 리턴
                        },
                    },
                });
            },
        });
    };

    return (
        <div>
            {data?.fetchBoards.map((d) => (
                <div key={d._id}>
                    <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                    <span style={{ margin: "10px" }}>제목 : {d.title}</span>
                    <button onClick={onClickDelete(d._id)}>삭제하기</button>
                </div>
            ))}
            <button onClick={onClickSubmit}>등록하기</button>
        </div>
    );
}
