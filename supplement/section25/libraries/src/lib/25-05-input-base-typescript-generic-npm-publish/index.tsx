"use client";

import { useFormContext, FieldValues, Path } from "react-hook-form";
import styles from "./styles.module.css";
import { HTMLInputTypeAttribute } from "react";

interface IInputBaseProps<PropsGenericType> {
    className?: string;
    type: HTMLInputTypeAttribute;
    keyname: Path<PropsGenericType>;
}

// 1. 뼈대 만들기
function InputBase<MyGenericType extends FieldValues>({
    type,
    keyname,
    className,
}: IInputBaseProps<MyGenericType>) {
    const { register } = useFormContext<MyGenericType>();

    return <input className={className} type={type} {...register(keyname)} />;
}

// 2. 인풋 찍기
export function InputSoftSFull<InputGenericType extends FieldValues>(
    props: IInputBaseProps<InputGenericType>
) {
    return <InputBase<InputGenericType> className={styles.input__soft__s__full} {...props} />;
}
