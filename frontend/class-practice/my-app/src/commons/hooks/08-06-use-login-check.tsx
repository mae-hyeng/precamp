"use client";

import { useRouter } from "next/navigation";

export const useLoginCheck = () => {
    const router = useRouter();

    const loginCheck = () => {
        // 1. 로그인체크

        // 2. 실패시
        alert("로그인을 아직 안하셨습니다");
        router.push("/section08/08-06-custom-hook-login");
    };

    return {
        loginCheck,
    };
};
