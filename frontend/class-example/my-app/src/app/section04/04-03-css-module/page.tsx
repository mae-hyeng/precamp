"use client";

import styles from "./style.module.css";

export default function CssPage() {
    return (
        <>
            <button className={styles.btn}>버튼</button>
            <div className={styles.box}>네모상자</div>
        </>
    );
}
