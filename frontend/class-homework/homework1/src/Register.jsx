import "./Register.css";
import profile from "./assets/profile.png";
import logo from "./assets/logo.png";
import addImage from "./assets/addImage.png";

const Register = () => {
    return (
        <div className="Register">
            <div className="header">
                <div className="left-header">
                    <img src={logo} />
                    <div className="header-category selected">트립토크</div>
                    <div className="header-category">숙박권 구매</div>
                    <div className="header-category">마이 페이지</div>
                </div>
                <div className="right-header">
                    <img src={profile} />
                    <select>
                        <option>1</option>

                        <option>1</option>

                        <option>1</option>
                    </select>
                </div>
            </div>
            <div className="main">
                <h5>게시물 등록</h5>
                <div className="main-section-1">
                    <div className="section-1-wrapper">
                        <div>
                            작성자
                            <span className="require-input">*</span>
                        </div>
                        <input placeholder="작성자 명을 입력해 주세요." />
                    </div>
                    <div className="section-1-wrapper">
                        <div>
                            비밀번호<span className="require-input">*</span>
                        </div>
                        <input placeholder="작성자 명을 입력해 주세요." />
                    </div>
                </div>
                <div className="line"></div>
                <div className="main-section-2">
                    <div>
                        제목<span className="require-input">*</span>
                    </div>
                    <input placeholder="제목을 입력해 주세요." />
                </div>
                <div className="line"></div>
                <div className="main-section-3">
                    <div>
                        내용<span className="require-input">*</span>
                    </div>
                    <textarea placeholder="내용을 입력해 주세요."></textarea>
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
                <button className="submit">등록하기</button>
            </div>
        </div>
    );
};

export default Register;
