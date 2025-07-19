"use client";

import Child1 from "@/components/14-04-lifting-state-up/Child1";
import Child2 from "@/components/14-04-lifting-state-up/Child2";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incCount = () => {
        setCount(count + 1);
    };

    const decCount = () => {
        setCount(count - 1);
    };

    return (
        <>
            <Child1 count={count} setCount={setCount} decCount={decCount} />
            <div>========================================================</div>
            <Child2 count={count} incCount={incCount} decCount={decCount} />
        </>
    );
};

export default Counter;
