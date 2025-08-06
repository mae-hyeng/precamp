"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function IsSubmittingPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    // react-hook-form 에 이미 만들어져 있음
    // const {formState} = useForm();
    // formState.isSubmitting

    const onClickSubmit = async () => {
        setIsSubmitting(true);

        const result = await fetch("http://localhost:4100/board/{글번호}?number=10");
        const data = await result.json();
        console.log(data);

        setIsSubmitting(false);
    };

    return (
        <button onClick={onClickSubmit} disabled={isSubmitting}>
            게시글 등록
        </button>
    );
}
