"use client";

import { usePathname } from "next/navigation";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const HIDDEN_HEADERS = ["/section13/13-03-props-children2", "/section12/12-03-library-start"];

interface ILayout {
    children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
    const pathName = usePathname();
    console.log("======================");
    console.log("pathName : ", pathName);
    console.log("======================");

    const isHiddenHeader = HIDDEN_HEADERS.includes(pathName);
    return (
        <>
            {!isHiddenHeader && <LayoutHeader />}
            <LayoutBanner />
            <LayoutNavigation />
            <div style={{ height: "500px", display: "flex" }}>
                <div style={{ width: "30%", backgroundColor: "orange" }}>사이드바</div>
                <div style={{ width: "70%" }}>{children}</div>
            </div>
            <LayoutFooter />
        </>
    );
}
