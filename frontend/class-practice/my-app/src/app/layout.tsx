import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/commons/layout";
import ApolloUploadSetting from "@/commons/settings/18-01-apollo-upload-setting";
import ApolloHeaderSetting from "@/commons/settings/22-01-apollo-header-setting";
import ApolloHeaderSettingLocalStorage from "@/commons/settings/22-02-apollo-header-setting-localstorage";

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
                {/* <ApolloUploadSetting> */}
                {/* <ApolloHeaderSetting> */}
                <ApolloHeaderSettingLocalStorage>
                    <Layout>{children}</Layout>
                </ApolloHeaderSettingLocalStorage>
                {/* </ApolloHeaderSetting> */}
                {/* </ApolloUploadSetting> */}
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
