"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            number
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS);

    const onClickAlert = (e) => {
        // e.target => 내가 클릭한 태그
        // div 안의 span을 누르게 되면 span의 id를 읽게 되는데 span에는 id가 없어 실행되지 않음
        // alert(e.target.id);

        //e.currentTarget => 내 클릭이 버블링되면 부모꺼의 onClick이 실행, 현재 실행된 그 태그
        alert(e.currentTarget.id);
    };

    return (
        <div>
            {data?.fetchBoards.map((d) => (
                <div key={d.number} id={d.writer} onClick={onClickAlert}>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: "10px" }}>{d.number}</span>
                    <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                    <span style={{ margin: "10px" }}>제목 : {d.title}</span>
                </div>
            ))}
        </div>
    );
}
