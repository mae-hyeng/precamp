"use client";

export default function RestGetPage() {
    const onClickAsync = () => {
        const result = fetch("https://api.artic.edu/api/v1/artworks/129884");
        console.log(result); // Promise
    };

    const onClickSync = async () => {
        const result = await fetch("https://api.artic.edu/api/v1/artworks/129884");
        const data = await result.json();
        console.log(data);
        console.log(data.data);
    };

    return (
        <>
            <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
            <br />
            <button onClickCapture={onClickSync}>REST-API(동기) 요청하기</button>
        </>
    );
}
