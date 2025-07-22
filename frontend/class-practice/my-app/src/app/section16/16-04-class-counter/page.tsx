"use client";

import { Component, ReactNode } from "react";

export default class ClassCounterPage extends Component {
    state = {
        count: 1,
    };

    // 아래 함수처럼 하면 this가 바뀌어서 실행 시 오류 발생함
    // onClickCountUp() {
    //     this.setState({
    //         count: this.state.count + 1,
    //     });
    // }

    // 1. 아래처럼 화살표 함수로 처리하거나
    // onClickCountUp = () => {
    //     this.setState({
    //         count: this.state.count + 1,
    //     });
    // }

    // 2. bind 시켜줌
    onClickCountUp() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        return (
            <>
                <div>{this.state.count}</div>

                {/* <button onClick={this.onClickCountUp}>카운트 올리는 버튼</button> */}
                {/* 2. 아래처럼 로직상의 this를 bind 시켜주면 해결 된다 */}
                <button onClick={this.onClickCountUp.bind(this)}>카운트 올리는 버튼</button>
            </>
        );
    }
}
