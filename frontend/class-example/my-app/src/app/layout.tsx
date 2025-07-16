import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ApolloSetting from "@/commons/settings/06-02-apollo-setting";
import Layout from "@/commons/layout";

const myFont = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--myFont",
    weight: "100 900",
});
const globalFont = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--globalFont",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "My Homepage",
    description: "반갑습니다. My Homepage입니다",
};

interface IProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
    return (
        <html lang="en">
            <body className={`${myFont.variable} ${globalFont.variable}`}>
                <div>============== 여기 위는 레이아웃 ==============</div>
                <ApolloSetting>
                    <Layout>{children}</Layout>
                </ApolloSetting>
                <div>============== 여기 아래는 레이아웃 ==============</div>
            </body>
        </html>
    );
}

/*
    [ Next 실행 순서 ]

    1. 주소창에 주소 입력
        => http://localhost:3000/

    2. 입력된 주소의 폴더안의 page.tsx 찾기
        => app/page.tsx
            (ex, 주소: /mypage 라면 app/mypage/page.tsx 찾기 )

    3. 해당 페이지 컴포넌트를 통째로 props에 넣어서 실행
    <RootLayout children={페이지컴포넌트} />
*/
