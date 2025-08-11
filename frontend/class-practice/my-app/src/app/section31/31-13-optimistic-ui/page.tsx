"use client";

import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            likeCount
        }
    }
`;

const LIKE_BOARD = gql`
    mutation likeBoard($boardId: ID!) {
        likeBoard(boardId: $boardId)
    }
`;

export default function OptimisticUiPage() {
    // boardId는 useParam으로 뽑아내서 사용

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: "" },
    });
    const [likeBoard] = useMutation(LIKE_BOARD);

    const onClickLike = () => {
        likeBoard({
            variables: {
                boardId: "",
            },
            // refetchQueries: [{}]
            optimisticResponse: {
                likeBoard: (data?.fetchBoard.lickCount ?? 0) + 1,
            },
            update: (cache, { data }) => {
                // cache.writeQuery => 없는 것도 만들어낼 수 있음
                cache.writeQuery({
                    query: FETCH_BOARD,
                    variables: { boardId: "" },
                    data: {
                        fetchBoard: {
                            _id: "",
                            __typename: "Board",
                            likeCount: data.likeBoard, //  좋아요 개수
                        },
                    },
                });
            },
        });
    };
    return (
        <>
            <div>현재카운트(좋아요): {data?.fetchBoard.likeCount ?? 0}</div>
            <button onClick={onClickLike}>좋아요 올리기</button>
        </>
    );
}
