"use client";

import styles from "./styles.module.css";

export default function FontPage() {
    return (
        <>
            <div>글로벌 font</div>
            <div className={styles.showFont}>지정한 font</div>
        </>
    );
}
