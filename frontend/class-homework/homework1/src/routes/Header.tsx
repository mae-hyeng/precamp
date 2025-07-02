import profile from "../assets/profile.png";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
    return (
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
    );
};

export default Header;
