"use client";

import styles from "./style.module.css";

export default function CssPage() {
    return (
        <>
            <button className={styles.btn}>버튼</button>
            <div className={styles.box}>네모상자</div>
            <br />

            <div className={styles.box2}>네모상자</div>

            <div className="lg:myBox">클 때는 초록색</div>
        </>
    );
}
