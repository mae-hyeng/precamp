"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLoadStore } from "../stores/26-02-load-store";
import { useAccessTokenStore } from "../stores/22-01-access-token-store";

export const withLoginCheck =
    (컴포넌트: () => JSX.Element) =>
    <P extends object>(props: P) => {
        const router = useRouter();
        const { isLoaded } = useLoadStore();
        const { accessToken } = useAccessTokenStore();

        useEffect(() => {
            if (!isLoaded) return;
            if (accessToken) return;

            alert("로그인 후 이용 가능");
            router.push("/section26/26-02-login-refreshtoken-refresh");
        }, [isLoaded]);

        return <컴포넌트 {...props} />;
    };

// function QQQPage () {
//     return <div></div>
// }

// withLoginCheck(QQQPage)({bbb: "철수"})
