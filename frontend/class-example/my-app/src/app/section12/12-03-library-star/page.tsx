"use client";

import React, { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
    const [value, setValue] = useState(3);

    // // 1단계 방식 => onChange는 Antd 개발자들이 만든 함수(그래서 value가 들어옴(Rate onChange에 마우스 커서 올리면 보임))
    // const onChangeStar = (value) => {
    //     setValue(value);
    // };

    // return <Rate onChange={onChangeStar} value={value} />;

    // // 2단계 방식
    // const onChangeStar = (value) => setValue(value); // 중괄호와 return 사이에 아무것도 없으면 소괄호로 변경 가능 => 특별한 의미 없으면 소괄호 생략 가능

    // return <Rate onChange={onChangeStar} value={value} />;

    // // 3단계 방식
    // return <Rate onChange={(value) => setValue(value)} value={value} />;

    // // 4단계 방식
    // return <Rate onChange={setValue} value={value} />;

    // 맨 처음 가져왔을 때의 코드와 4단계 방식의 코드가 일치함
    // 가져온 코드를 풀어서 작성한 단계가 1~4단계
    return <Rate onChange={setValue} value={value} />;
}
