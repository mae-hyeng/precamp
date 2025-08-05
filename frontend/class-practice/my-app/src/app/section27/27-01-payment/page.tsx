"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { v4 as uuidv4 } from "uuid";

export default function PaymentPage() {
    const onClickPayment = async () => {
        const result = await PortOne.requestPayment({
            storeId: "store-3f39a8c7-601c-4633-b677-7a7da5c9d349",
            channelKey: "channel-key-6d5bed93-5038-4fd5-bbdc-9d7205ae8e58",
            paymentId: uuidv4(),
            orderName: "노트북",
            totalAmount: 3000,
            currency: "CURRENCY_KRW",
            payMethod: "EASY_PAY",
            customer: {
                fullName: "짱구",
                phoneNumber: "010-9999-9999",
                email: "j9@a.com",
                address: {
                    country: "COUNTRY_KR",
                    addressLine1: "서울시",
                    addressLine2: "9층",
                },
                zipcode: "12345",
            },
            redirectUrl: "http://localhost:3000/section27/27-01-payment-success",
        });

        console.log(result);
    };

    return <button onClick={onClickPayment}>결제하기</button>;
}
