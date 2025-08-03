import { UpdateBoardInput } from "@/commons/graphql/graphql";
import { z } from "zod";

export const schema = z.object({
    // writer: z.string().min(1, { message: "작성자를 입력해 주세요." }),
    title: z.string().min(1, { message: "제목을 입력해 주세요." }),
    contents: z.string().min(1, { message: "내용을 입력해 주세요." }),

    // hobby: z.string().optional(),
    // email: z.string().email("이메일 형식에 적합하지 않습니다"),
    // password: z
    //     .string()
    //     .min(4, { message: "비밀번호는 최소 4자리 이상 입력해 주세요" })
    //     .max(15, { message: "비밀번호는 최대 15자리로 입력해 주세요." }),
    // phone: z.string().regex(/^\d{3}-\d{3,4}-\d{4}$/, { message: "휴대폰 형식에 알맞지 않습니다." }),
});

// 1. 내가 만든 z.object로 타입 뽑아내기
type myschema = z.infer<typeof schema>;

// 2-1. 이미 타입이 있는 경우, 이 타입을 적용하여 schema 만들기
export interface ISchema {
    writer: string;
    title: string;
    contents: string;
}

export const schema1: z.ZodType<ISchema> = z.object({
    writer: z.string().min(1, { message: "작성자를 입력해 주세요." }),
    title: z.string().min(1, { message: "제목을 입력해 주세요." }),
    contents: z.string().min(1, { message: "내용을 입력해 주세요." }),

    // hobby: z.string().optional(),
    // email: z.string().email("이메일 형식에 적합하지 않습니다"),
    // password: z
    //     .string()
    //     .min(4, { message: "비밀번호는 최소 4자리 이상 입력해 주세요" })
    //     .max(15, { message: "비밀번호는 최대 15자리로 입력해 주세요." }),
    // phone: z.string().regex(/^\d{3}-\d{3,4}-\d{4}$/, { message: "휴대폰 형식에 알맞지 않습니다." }),
});

// 2-2. 이미 있는 타입을 다운로드 받은 경우 => Omit으로도 사용 가능(주의: 안전성에 주의/가급적 사용하지 않는게 좋음.)
interface IMyUpdateType extends Pick<UpdateBoardInput, "title" | "contents"> {
    // hobby: string // => 추가 가능
}

export const schema2: z.ZodType<IMyUpdateType> = z.object({
    // writer: z.string().min(1, { message: "작성자를 입력해 주세요." }),
    title: z.string().min(1, { message: "제목을 입력해 주세요." }),
    contents: z.string().min(1, { message: "내용을 입력해 주세요." }),

    // hobby: z.string().optional(),
    // email: z.string().email("이메일 형식에 적합하지 않습니다"),
    // password: z
    //     .string()
    //     .min(4, { message: "비밀번호는 최소 4자리 이상 입력해 주세요" })
    //     .max(15, { message: "비밀번호는 최대 15자리로 입력해 주세요." }),
    // phone: z.string().regex(/^\d{3}-\d{3,4}-\d{4}$/, { message: "휴대폰 형식에 알맞지 않습니다." }),
});
