"use client";

import { withLoginCheck } from "@/commons/hocs/23-07-withLoginCheck";
import { gql, useApolloClient, useLazyQuery, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            _id
            email
            name
        }
    }
`;

// export default withLoginCheck(function LoginSuccessPage() {
//     const { data } = useQuery(FETCH_USER_LOGGED_IN);

//     return <>{data?.fetchUserLoggedIn.name}님 환영합니다.</>;
// });

function LoginSuccessPage() {
    // 1. 페이지 접속 시 자동으로 data에 받아지고(data는 글로벌스테이트 저장), 리렌더링 됨
    // const { data } = useQuery(FETCH_USER_LOGGED_IN);

    // 2. 함수 실행시 data에 받아지고(data는 글로벌스테이트 저장), 리렌더링 돔
    // const [myFunc, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);

    // 3. fetch처럼 사용하는 방법(결과는 글로벌스테이트 저장)
    // const client = useApolloClient();
    // client.query({
    //     query: FETCH_USER_LOGGED_IN,
    // });

    const client = useApolloClient();
    const onClickButton = async () => {
        // 이 안에서 API 요청
        const result = await client.query({
            query: FETCH_USER_LOGGED_IN,
        });
        console.log(result);
    };

    return (
        <>
            <button onClick={onClickButton}>클릭</button>
            {/* {data?.fetchUserLoggedIn.name}님 환영합니다. */}
        </>
    );
}

export default LoginSuccessPage;
