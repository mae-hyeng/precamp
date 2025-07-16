"use client";

import Box from "@/components/13-02-props-children1";

export default function section13Page() {
    // 1. children 넘기기 첫 번째 방식
    // return (
    //     <>
    //         <div>+++++ 철수 영희 훈이 +++++</div>
    //         <Box children={<button>버튼1</button>} />
    //         <div>+++++ 철수 영희 훈이 +++++</div>
    //     </>
    // );

    // 2. children 넘기기 두 번째 방식
    return (
        <>
            <div>+++++ 철수 영희 훈이 +++++</div>
            <Box>
                <button>버튼2</button>
            </Box>
            <div>+++++ 철수 영희 훈이 +++++</div>
        </>
    );

    // 3. 둘 다 있을 경우
    // return (
    //     <>
    //         <div>+++++ 철수 영희 훈이 +++++</div>
    //         <Box children={<button>버튼1</button>}>
    //             <button>버튼2</button>
    //         </Box>
    //         <div>+++++ 철수 영희 훈이 +++++</div>
    //     </>
    // );
}
