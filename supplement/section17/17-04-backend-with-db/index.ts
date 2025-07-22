import { DataSource } from "typeorm";
import { Board } from "./Board";

console.log("백엔드 프로그램 시작");

console.log("여기에서 API 생성");

console.log("여기에서 DB 접속하고, 테이블 생성");
const AppDataSource = new DataSource({
    type: "postgres",
    // host: "34.64.244.122", // DB가 있는 컴퓨터의 IP 주소
    host: "34.64.38.113",
    // port: 5001, // DB가 있는 컴퓨터의 port
    port: 5032,
    username: "postgres",
    password: "postgres2022",
    database: "postgres",
    entities: [Board],
});

AppDataSource.initialize()
    .then(() => {
        console.log("DB 접속 성공. 동기화 시작");
    })
    .catch((error) => {
        console.log("DB 접속 실패");
        console.log("원인 : ", error);
    });
