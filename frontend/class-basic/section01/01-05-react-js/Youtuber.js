const Youtuber = (props) => {
    return (
        <div>
            <div>유튜브 채널에 오신 것을 환영합니다.</div>
            <span>{props.subCount}</span>

            <button onClick={props.incSubCount}>구독하기</button>
        </div>
    );
};
