import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ApolloSetting from "@/commons/settings/apollo-setting";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Trip Trip",
    description: "Trip",
};

export default function RootLayout(props) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ApolloSetting>
                    <Header />
                    {props.children}
                </ApolloSetting>
            </body>
        </html>
    );
}
