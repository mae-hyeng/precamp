"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
    query fetchBoards1401($page: Int) {
        fetchBoards(page: $page) {
            _id
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutingMovedPage() {
    const { data, refetch } = useQuery(FETCH_BOARDS);

    console.log(data);

    const onClickPage = (e) => {
        refetch({
            page: Number(e.currentTarget.id),
        });
    };

    return (
        <div>
            {data?.fetchBoards.map((d) => (
                <div key={d._id}>
                    <span style={{ margin: "10px" }}>작성자 : {d.writer}</span>
                    <span style={{ margin: "10px" }}>제목 : {d.title}</span>
                </div>
            ))}

            {/* <span id="1" onClick={onClickPage}>
                {" "}
                1{" "}
            </span>
            <span id="2" onClick={onClickPage}>
                {" "}
                2{" "}
            </span>
            <span id="3" onClick={onClickPage}>
                {" "}
                3{" "}
            </span> */}

            {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
                <span key={el} id={String(el)} onClick={onClickPage}>
                    {el}
                </span>
            ))} */}

            {/* {["철수", "철수", "철수", "철수", "철수", "철수", "철수", "철수", "철수", "철수"].map(
                (_, idx) => (
                    <span key={idx + 1} id={String(idx + 1)} onClick={onClickPage}>
                        {idx + 1}
                    </span>
                )
            )} */}

            {new Array(10).fill("철수").map((_, idx) => (
                <span key={idx + 1} id={String(idx + 1)} onClick={onClickPage}>
                    {idx + 1}
                </span>
            ))}
        </div>
    );
}
