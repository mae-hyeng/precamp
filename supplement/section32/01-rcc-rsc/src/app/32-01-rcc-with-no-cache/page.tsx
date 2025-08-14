"use client";

export default function RccWithNoCachePage() {
    const onClickButton = async () => {
        const result = await fetch("https://www.amiiboapi.com/api/amiibo/?name=mario");
        console.log("요청이 완료되었습니다.", result);
    };

    return <button onClick={onClickButton}>요청하기</button>;
}
