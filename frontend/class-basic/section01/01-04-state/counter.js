const Counter = (props) => {
    const [count, setCount] = React.useState(0);

    const incCount = () => {
        setCount(count + 1);
    };

    const decCount = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={incCount}>카운트 올리기</button>
            <button onClick={decCount}>카운트 내리기</button>
        </div>
    );
};
