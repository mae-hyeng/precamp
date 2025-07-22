"use client";

import { useEffect, useState } from "react";

export default function RestGetPage() {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const myFunction = async () => {
            const result = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await result.json();
            setImageUrl(data.message);
        };
        myFunction();
    }, []);

    return (
        <>
            <img src={imageUrl} />
        </>
    );
}
