"use client";
import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [myFunc] = useMutation(CREATE_PRODUCT);

    const onClickSubmit = async () => {
        // 그래프큐엘 요청
        const result = await myFunc({
            variables: {
                // variables => 이게 $역할을 함
                seller: "짱구",
                createProductInput: {
                    name: "모니터",
                    detail: "좋은 모니터",
                    price: 4000,
                },
            },
        });
        console.log(result);
        /*
        result 결과
        {
            "data": {
                "createProduct": {
                    "_id": "352d8044-e528-4769-a5b8-a85944d41315",
                    "number": null,
                    "message": "상품이 정상적으로 등록되었습니다.",
                    "__typename": "Return"
                }
            }
        }
        */
    };

    /*
    아래 형식으로 확인 가능
    query {
        fetchProduct(productId: "352d8044-e528-4769-a5b8-a85944d41315") {
            _id
            seller
            name
            detail
            price
            createdAt
        }
    }
    */

    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
