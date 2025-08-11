"use client";

import { memo } from "react";

function Word({ el }) {
    console.log("자식이 변경되었습니다. ", el);
    return <span>{el}</span>;
}

export default memo(Word);
