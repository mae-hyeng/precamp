import { useState } from "react";

const Board1 = () => {
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [isActive, setIsActive] = useState(false);

    const onChangeWriter = (e) => {
        setWriter(e.target.value);
        if (e.target.value && title && content) setIsActive(true);
        else {
            console.log("else 실행");
            setIsActive(false);
        }
    };

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
        if (writer && e.target.value && content) setIsActive(true);
        else {
            console.log("else 실행");
            setIsActive(false);
        }
    };

    const onChangeContent = (e) => {
        setContent(e.target.value);
        if (writer && title && e.target.value) setIsActive(true);
        else {
            console.log("else 실행");
            setIsActive(false);
        }
    };

    const onClickSUbmit = () => {
        console.log(writer);
        console.log(title);
        console.log(content);
        alert("게시글 등록에 성공하였습니다.");
    };

    const myStyle = {
        color: "red",
        backgroundColor: "yellow",
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
                /* style={myStyle} */ style={{ backgroundColor: isActive ? "yellow" : "gray" }}
            >
                등록하기
            </button>
        </div>
    );
};

export default Board1;
