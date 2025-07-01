import { ChangeEvent, MouseEvent, useState } from "react";

const Board2 = () => {
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [isActive, setIsActive] = useState(false);

    const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
        setWriter(e.target.value);
        if (e.target.value && title && content) return setIsActive(true);

        setIsActive(false);
    };

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        if (writer && e.target.value && content) return setIsActive(true);

        setIsActive(false);
    };

    const onChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
        if (writer && title && e.target.value) return setIsActive(true);

        setIsActive(false);
    };

    const onClickSUbmit = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(writer);
        console.log(title);
        console.log(content);
        alert("게시글 등록에 성공하였습니다.");
    };

    return (
        <div>
            작성자 : <input onChange={onChangeWriter} />
            <br />
            제목 : <input onChange={onChangeTitle} />
            <br />
            내용 : <input onChange={onChangeContent} />
            <br />
            <button
                onClick={onClickSUbmit}
                style={{ backgroundColor: isActive ? "yellow" : "gray" }}
            >
                등록하기
            </button>
        </div>
    );
};

export default Board2;
