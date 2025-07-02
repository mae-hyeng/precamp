import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export default function RootLayout(props) {
    return (
        <html lang="en">
            <body className={`${myFont.variable} ${globalFont.variable}`}>
                <div>============== 여기 위는 레이아웃 ==============</div>
                {props.children}
                <div>============== 여기 아래는 레이아웃 ==============</div>
            </body>
        </html>
    );
}
