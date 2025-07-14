"use client";

import { CloseCircleOutlined } from "@ant-design/icons";

export default function LibraryIconPage() {
    const onClickDelete = (e) => {
        // 1. 대부분의 아이콘 라이브러리들은 <span />를 부모로 하여 내부에 아이콘 이미지가 자식으로 들어감
        // 2. 이미지 클릭 시, 부모로 onClick 이벤트가 전파됨

        // alert(`${e.target.id}를 정말로 삭제하시겠습니까?`); // svg 이미지가 선택돼서 id 못찾음
        alert(`${e.currentTarget.id}를 정말로 삭제하시겠습니까?`);
    };
    return <CloseCircleOutlined id="삭제할게시글ID" onClick={onClickDelete} />;
}
