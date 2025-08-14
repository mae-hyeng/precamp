// "use client"; => 페이지는 RSC로 시작. 왜냐하면 하위 컴포넌트가 모두 RCC가 되기 때문

import Rcc from "../components/32-04-rcc-rsc-composition/01-rcc";
import Rsc from "../components/32-04-rcc-rsc-composition/02-rsc";

export default function RccRscCompositionPage() {
    console.log("서버컴포넌트 렌더링");
    return (
        <>
            <div>페이지 컴포넌트</div>
            <Rcc>
                <Rsc />
            </Rcc>
        </>
    );
}
