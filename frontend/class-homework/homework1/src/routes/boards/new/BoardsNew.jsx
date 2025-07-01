import "./BoardsNew.css";
import addImage from "../../../assets/addImage.png";
import { useState } from "react";
import Header from "../../Header";

const BoardsNew = () => {
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onChangeInput = (e) => {
        const { name, value } = e.target;

        if (name === "writer") setWriter(value);
        else if (name === "password") setPassword(value);
        else if (name === "title") setTitle(value);
        else if (name === "content") setContent(value);

        if (value) document.getElementById(`${name}-error`).innerText = "";
    };

    const onClickSubmit = () => {
        if (!writer) document.getElementById("writer-error").innerText = "작성자를 입력해주세요";

        if (!password)
            document.getElementById("password-error").innerText = "비밀번호를 입력해주세요";

        if (!title) document.getElementById("title-error").innerText = "제목을 입력해주세요";

        if (!content) document.getElementById("content-error").innerText = "내용을 입력해주세요";

        if (writer && password && title && content) alert("게시글 등록이 가능한 상태입니다!");
    };

    return (
        <div className="BoardsNew">
            <div className="main">
                <h5>게시물 등록</h5>
                <div className="main-section-1">
                    <div className="section-1-wrapper">
                        <div>
                            작성자
                            <span className="require-input">*</span>
                        </div>
                        <input
                            onChange={onChangeInput}
                            name="writer"
                            placeholder="작성자 명을 입력해 주세요."
                        />
                        <div id="writer-error" className="error"></div>
                    </div>
                    <div className="section-1-wrapper">
                        <div>
                            비밀번호<span className="require-input">*</span>
                        </div>
                        <input
                            onChange={onChangeInput}
                            name="password"
                            placeholder="비밀번호를 입력해 주세요."
                        />
                        <div id="password-error" className="error"></div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="main-section-2">
                    <div>
                        제목<span className="require-input">*</span>
                    </div>
                    <input
                        onChange={onChangeInput}
                        name="title"
                        placeholder="제목을 입력해 주세요."
                    />
                    <div id="title-error" className="error"></div>
                </div>
                <div className="line"></div>
                <div className="main-section-3">
                    <div>
                        내용<span className="require-input">*</span>
                    </div>
                    <textarea
                        onChange={onChangeInput}
                        name="content"
                        placeholder="내용을 입력해 주세요."
                    ></textarea>
                    <div id="content-error" className="error"></div>
                </div>
                <div className="main-section-4">
                    <div>주소</div>
                    <div className="address-area-1">
                        <input placeholder="01234" />
                        <button>우편번호 검색</button>
                    </div>
                    <div>
                        <input placeholder="주소를 입력해 주세요." />
                    </div>
                    <div>
                        <input placeholder="상세주소" />
                    </div>
                </div>
                <div className="main-section-5">
                    <div>유튜브 링크</div>
                    <input placeholder="링크를 입력해 주세요" />
                </div>
                <div className="main-section-6">
                    <div>사진 첨부</div>
                    <div className="img-wrapper">
                        <img src={addImage} />
                        <img src={addImage} />
                        <img src={addImage} />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button className="cancel">취소</button>
                <button onClick={onClickSubmit} className="submit">
                    등록하기
                </button>
            </div>
        </div>
    );
};

export default BoardsNew;
