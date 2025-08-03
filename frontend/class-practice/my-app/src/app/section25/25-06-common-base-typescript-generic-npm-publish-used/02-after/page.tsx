"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISchema, schema } from "./schema";
// import { InputSoftSFull, ButtonSoftMFull } from "codecamp-ui";
// import { InputSoftSFull, ButtonSoftMFull } from "mae-hyeng-ui";
import { ButtonSoftMFull, InputSoftSFull } from "@maehyeng/ui";

export default function GraphqlMutationPage() {
    const methods = useForm<ISchema>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    const onClickSubmit = async (data: ISchema) => {
        console.log(data);
    };

    console.log("리렌더링이 되나?");

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onClickSubmit)}>
                제목(컴포넌트) : <InputSoftSFull type="text" keyname="title" />
                <div style={{ color: "red" }}>{methods.formState.errors.title?.message}</div>
                <br />
                내용(컴포넌트) : <InputSoftSFull type="text" keyname="contents" />
                <div style={{ color: "red" }}>{methods.formState.errors.contents?.message}</div>
                <br />
                <ButtonSoftMFull>GRAPHQL-API 요청하기</ButtonSoftMFull>
            </form>
        </FormProvider>
    );
}
