"use client";

import { withLoginCheck } from "@/commons/hocs/23-04-withLoginCheck";
import { gql, useQuery } from "@apollo/client";

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
    const { data } = useQuery(FETCH_USER_LOGGED_IN);

    return <>{data?.fetchUserLoggedIn.name}님 환영합니다.</>;
}

export default withLoginCheck(LoginSuccessPage);
