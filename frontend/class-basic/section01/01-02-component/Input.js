const MyInput = () => {
    const msg = "비밀번호를 입력하세요";

    // 어차피 바벨이 변수까지 다 합쳐서 진짜 HTML으로 바꿔줌
    return <input type="text" placeholder={msg} />;
};
