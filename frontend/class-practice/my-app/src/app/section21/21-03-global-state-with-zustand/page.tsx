"use client";

import Child1 from "@/components/21-03-global-state-with-zustand/Child1";
import Child2 from "@/components/21-03-global-state-with-zustand/Child2";

const Counter = () => {
    return (
        <>
            <Child1 />
            <div>========================================================</div>
            <Child2 />
        </>
    );
};

export default Counter;
