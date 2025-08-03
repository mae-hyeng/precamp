"use client";

import { useFormContext } from "react-hook-form";
import styles from "./styles.module.css";
import { useState } from "react";

// 1. 뼈대 만들기
function InputBase({ type, keyname, className }) {
    const { register } = useFormContext();

    return <input className={className} type={type} {...register(keyname)} />;
}

// 2. 인풋 찍기
export function InputSoftSFull<InputGenericType>(props) {
    const [] = useState<InputGenericType>();
    return <InputBase className={styles.input__soft__s__full} {...props} />;
}
