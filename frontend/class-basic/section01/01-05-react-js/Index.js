const MainPage = (props) => {
    const [subCount, setSubCount] = React.useState(0);

    const incSubCount = () => {
        setSubCount(subCount + 1);
    };

    const showList = () => {
        document.getElementById("list").style = "display: block";
        document.getElementById("youtuber").style = "display: none";
    };

    const showYoutuber = () => {
        document.getElementById("list").style = "display: none";
        document.getElementById("youtuber").style = "display: block";
    };

    return (
        <div>
            <div>배너화면입니다.</div>
            <div>
                <button onClick={showList}>유튜브 목록</button>
                <button onClick={showYoutuber}>유튜버 채널</button>
            </div>

            <div id="list">
                <List subCount={subCount} />
            </div>

            <div id="youtuber">
                <Youtuber subCount={subCount} incSubCount={incSubCount} />
            </div>
        </div>
    );
};
