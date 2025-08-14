// "use client"; => 이걸 지우면 서버컴포넌트가 되고(서버에서 조회하고), 그려서 내려보내줌 (SSR: 서버사이드렌더링)
//               =>

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { GraphQLClient } from "graphql-request";

const FETCH_TRAVELPRODUCT = gql`
    query fetchTravelproduct($travelproductId: ID!) {
        fetchTravelproduct(travelproductId: $travelproductId) {
            _id
            name
            remarks
            contents
            images
        }
    }
`;

export default async function OpenGraphProviderLayout({ children, params }) {
    // 1. useParams로 travelproductId 가져오기
    // const params = useParams();
    // use client 주석했기 때문에 위 코드 사용 X

    // 2. travelproductId로 상품 조회하기 => useQuery로 조회
    // const { data } = useQuery(FETCH_TRAVELPRODUCT, {
    //     variables: { travelproductId: params.travelproductId },
    // });
    // use client 주석했기 때문에 위 코드 사용 X
    const graphQLClient = new GraphQLClient("https://main-practice.codebootcamp.co.kr/graphql");
    const data = await graphQLClient.request(FETCH_TRAVELPRODUCT, {
        travelproductId: params.travelproductId,
    });

    // 3. 해당 data로 <meta /> 바꾸기
    return (
        <>
            <meta property="og:title" content={data?.fetchTravelproduct?.name} />
            <meta property="og:description" content={data?.fetchTravelproduct?.remarks} />
            <meta property="og:image" content={data?.fetchTravelproduct?.images?.[0]} />
            <>{children}</>
        </>
    );
}
