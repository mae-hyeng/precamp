const App = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailError, setEmailError] = React.useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onClickSignup = (e) => {
        if (email.includes("@")) {
            setEmailError("");
            alert("회원가입을 축하합니다!");
        } else {
            // document.getElementById("error").innerText = "이메일이 올바르지 않습니다. @가 없음";
            // 위 방법 말고 state로 에러 보여주기
            setEmailError("이메일이 올바르지 않습니다. @가 없음");
        }
    };

    return (
        <div className="App">
            이메일 :{" "}
            <input type="text" onChange={onChangeEmail} placeholder="이메일을 입력해주세요" />
            <br />
            <div id="error">{emailError}</div>
            비밀번호 :{" "}
            <input
                type="password"
                onChange={onChangePassword}
                placeholder="비밀번호를 입력해주세요"
            />
            <br />
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    );
};
