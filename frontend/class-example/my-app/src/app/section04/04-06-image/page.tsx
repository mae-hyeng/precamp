"use client";

import Image from "next/image";
import styles from "./styles.module.css";

export default function ImagePage() {
    return (
        <>
            {/* 이미지 고전 방식 */}
            <img src="/images/00-image.jpg" alt="강아지이미지" className={styles.showImage} />

            {/* 이미지 Next 방식 */}
            <Image
                src="/images/00-image.jpg"
                alt="강아지이미지"
                className={styles.showImage}
                width={0}
                height={0}
                sizes="100vw"
            />
        </>
    );
}
