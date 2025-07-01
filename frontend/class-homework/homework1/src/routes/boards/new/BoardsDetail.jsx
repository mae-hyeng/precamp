import "./BoardsDetail.css";
import profile1 from "../../../assets/profile1.png";
import detail1 from "../../../assets/detail1.png";
import detail2 from "../../../assets/detail2.png";
import good from "../../../assets/good.png";
import bad from "../../../assets/bad.png";
import chat from "../../../assets/chat.png";
import banner from "../../../assets/banner.png";

const BoardsDetail = () => {
    return (
        <>
            <div className="Banner">
                <img className="banner-img" src={banner} />
            </div>
            <div className="BoardsDetail">
                <div className="detail-header">
                    <div className="detail-header-title">
                        살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애
                        살어리랏다얄리얄리 얄랑셩 얄라리 얄라
                    </div>
                    <div className="detail-header-info">
                        <div className="info-user">
                            <div>
                                <img src={profile1} />
                            </div>
                            <div>홍길동</div>
                        </div>
                        <div className="info-regDate">2025.07.01</div>
                    </div>
                </div>
                <div class="line"></div>
                <div className="detail-main">
                    <div className="detail-main-loc">
                        <button>서울특별시 영등포구</button>
                    </div>
                    <div className="detail-main-wrapper">
                        <div className="img1">
                            <img src={detail1} />
                        </div>
                        <div>
                            살겠노라 살겠노라. 청산에 살겠노라.
                            <br />
                            머루랑 다래를 먹고 청산에 살겠노라.
                            <br />
                            얄리얄리 얄랑셩 얄라리 얄라
                            <br />
                            <br />
                            우는구나 우는구나 새야. 자고 일어나 우는구나 새야.
                            <br />
                            너보다 시름 많은 나도 자고 일어나 우노라.
                            <br /> 얄리얄리 얄라셩 얄라리 얄라
                            <br />
                            <br />
                            갈던 밭(사래) 갈던 밭 보았느냐. 물 아래(근처) 갈던 밭 보았느냐
                            <br />
                            이끼 묻은 쟁기를 가지고 물 아래 갈던 밭 보았느냐.
                            <br />
                            얄리얄리 얄라셩 얄라리 얄라
                            <br />
                            <br />
                            이럭저럭 하여 낮일랑 지내 왔건만
                            <br />
                            올 이도 갈 이도 없는 밤일랑 또 어찌 할 것인가.
                            <br />
                            얄리얄리 얄라셩 얄라리 얄라
                            <br />
                            <br />
                            어디다 던지는 돌인가 누구를 맞히려던 돌인가. <br />
                            미워할 이도 사랑할 이도 없이 맞아서 우노라.
                            <br />
                            얄리얄리 얄라셩 얄라리 얄라
                            <br />
                            <br />
                            살겠노라 살겠노라. 바다에 살겠노라.
                            <br />
                            나문재, 굴, 조개를 먹고 바다에 살겠노라.
                            <br />
                            얄리얄리 얄라셩 얄라리 얄라
                            <br />
                            <br />
                            가다가 가다가 듣노라. 에정지(미상) 가다가 듣노라. <br />
                            사슴(탈 쓴 광대)이 솟대에 올라서 해금을 켜는 것을 듣노라.
                            <br />
                            얄리얄리 얄라셩 얄라리 얄라
                            <br />
                            <br />
                            가다 보니 배불룩한 술독에 독한 술을 빚는구나.
                            <br />
                            조롱박꽃 모양 누룩이 매워 (나를) 붙잡으니 내 어찌 하리이까.[1]
                            <br />
                            얄리얄리 얄라셩 얄라리 얄라
                        </div>
                        <div className="img2">
                            <img src={detail2} />
                        </div>
                    </div>
                    <div className="detail-main-like">
                        <div className="detail-main-like-btn">
                            <img src={bad} />
                            24
                        </div>
                        <div className="detail-main-like-btn">
                            <img src={good} />
                            12
                        </div>
                    </div>
                    <div className="detail-main-btn">
                        <button className="detail-main-btn-list">목록으로</button>
                        <button className="detail-main-btn-modify">수정하기</button>
                    </div>
                </div>
                <div class="line"></div>
                <div className="detail-reg-comment">
                    <div className="detail-reg-comment-img-wrapper">
                        <img src={chat} />
                        댓글
                    </div>
                    <div>별점</div>
                    <textarea placeholder="댓글을 입력해 주세요."></textarea>
                    <div className="detail-reg-comment-btn-wrapper">
                        <button>댓글 등록</button>
                    </div>
                </div>
                <div className="detail-all-comment">
                    <div>등록된 댓글이 없습니다.</div>
                </div>
            </div>
        </>
    );
};

export default BoardsDetail;
