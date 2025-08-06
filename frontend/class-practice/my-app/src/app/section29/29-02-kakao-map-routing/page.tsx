"use client";

import Link from "next/link";

export default function KakaoMapRouting() {
    return (
        <>
            {/* SPA 이동방식 - router.push, Link 등 */}
            <Link href={"/section29/29-02-kakao-map-routing-moved"}>페이지 이동 Link 태그</Link>;
            <br />
            <br />
            {/* MPA 이동방식 - location.href, <a /> 등 */}
            <a href="/section29/29-02-kakao-map-routing-moved">페이지 이동 a 태그</a>
            {/* 검색엔진을 위해 의미있는 태그를 써야됨(SEO) */}
            <h1></h1>
            <main></main>
            <section></section>
        </>
    );
}
