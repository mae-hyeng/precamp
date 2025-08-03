"use client";

import { FieldValues, useFormContext } from "react-hook-form";
import styles from "./styles.module.css";

interface IButtonBaseProps {
    children: React.ReactNode;
    className?: string;
}

// 1. 버튼 뼈대 만들기
function ButtonBase<ButtonGenericType extends FieldValues>({
    children,
    className,
}: IButtonBaseProps) {
    const { formState } = useFormContext<ButtonGenericType>();
    return (
        <button className={className} disabled={!formState.isValid}>
            {children}
        </button>
    );
}

// 2. 버튼 찍어내기

// 2-1) 부드러운 버튼
export function ButtonSoftMFull<ButtonGenericType extends FieldValues>(props: IButtonBaseProps) {
    return <ButtonBase<ButtonGenericType> className={styles.button__soft__m__full} {...props} />;
}

// // 2-2) 얇은버튼
// export function ButtonThinFitM() {
//     return <ButtonBase className={styles.button__thin__fit__m} />;
// }

// // 2-3) 둥근버튼
// export function ButtonCircleMM() {
//     return <ButtonBase className={styles.button__circle__m__m} />;
// }
