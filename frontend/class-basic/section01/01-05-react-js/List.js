const List = (props) => {
    return (
        <div>
            <div>유튜브 목록입니다.</div>
            <div>유튜브 영상1</div>
            <div>유튜브 영상2</div>
            <div>...</div>

            <span>구독자 수 : </span>
            <span>{props.subCount}</span>
        </div>
    );
};
