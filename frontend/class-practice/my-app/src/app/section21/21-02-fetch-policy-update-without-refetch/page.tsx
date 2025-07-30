"use client";

import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
    query fetchBoards2102 {
        fetchBoards {
            _id
            writer
            title
            contents
        }
    }
`;

const UPDAET_BOARD = gql`
    mutation {
        updateBoard(
            boardId: "6886d870e43aaf0029151d9a"
            password: "1234"
            updateBoardInput: { title: "제목 수정됨", contents: "내용 수정됨" }
        ) {
            _id
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS);
    const [updateBoard] = useMutation(UPDAET_BOARD);

    const onClickUpdate = () => {
        updateBoard();
    };

    return (
        <div>
            {data?.fetchBoards.map((d) => (
                <div key={d._id}>
                    <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                    <span style={{ margin: "10px" }}>제목 : {d.title}</span>
                </div>
            ))}
            <button onClick={onClickUpdate}>수정하기</button>
        </div>
    );
}
