import { useState } from "react";

export default function CommentItem({ d }) {
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
