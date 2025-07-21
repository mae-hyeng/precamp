import { FetchBoardsQuery } from "@/commons/graphql/graphql";
import { useState } from "react";

interface ICommentItemProps {
    d: FetchBoardsQuery["fetchBoards"][0];
    // FetchBoardsQuery.fetchBoards 의 0번째 (타입이기 때문에 0번째든 1번째든 상관 X)
}

export default function CommentItem({ d }: ICommentItemProps) {
    const [isEdit, setIsEdit] = useState(false);

    const onClickEdit = () => setIsEdit(true);

    return (
        <div>
            {!isEdit ? (
                <div>
                    <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                    <span style={{ margin: "10px" }}>제목 : {d.title}</span>
                    <button onClick={onClickEdit}>수정하기</button>
                </div>
            ) : (
                <input type="text" key={d._id} />
            )}
        </div>
    );
}
