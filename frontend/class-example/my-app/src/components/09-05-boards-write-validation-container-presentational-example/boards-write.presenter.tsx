"use client";

export default function BoardsWriteUI({
    onChangeWriter,
    onChangeTitle,
    onChangeContents,
    onClickUpdate,
    onClickSubmit,
    isEdit,
    data,
}) {
    return (
        <>
            작성자 : <input onChange={onChangeWriter} defaultValue={data?.fetchBoard.writer} />
            <br />
            제목 : <input onChange={onChangeTitle} defaultValue={data?.fetchBoard.title} />
            <br />
            내용 : <input onChange={onChangeContents} defaultValue={data?.fetchBoard.contents} />
            <br />
            <button onClick={isEdit ? onClickUpdate : onClickSubmit}>
                {isEdit ? "수정" : "등록"}하기
            </button>
        </>
    );
}
