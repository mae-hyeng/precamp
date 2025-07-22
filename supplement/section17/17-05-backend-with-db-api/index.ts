import { DataSource } from "typeorm";
import { Board } from "./Board";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

console.log("백엔드 프로그램 시작");

console.log("여기에서 API 생성");
// 1. API_DOCS 만들기
const typeDefs = `#graphql
    type MyBoard {
        number: Int
        writer: String
        title: String
        contents: String
    }

    type Query {
        fetchBoards: [MyBoard]
    }

    type Mutation {
        createBoard(writer: String, title: String, contents: String): String!
    }
`;

// 2. API 만들기
const resolvers = {
    Query: {
        fetchBoards: () => {
            return [
                {
                    number: 1,
                    writer: "철수",
                    title: "안녕하세요",
                    contents: "반갑습니다",
                },
                // ... 더 많은 게시글 아래에 추가 가능
            ];
        },
    },

    Mutation: {
        createBoard: (parent: any, args: any, context: any, info: any) => {
            console.log("받은 작성자 : ", args.writer);
            console.log("받은 제목 : ", args.title);
            console.log("받은 내용 : ", args.contents);
            return "게시글 등록 성공";
        },
    },
};

// 3. API-DOCS와 API를 그룹핑한 아폴로서버 만들기
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

console.log("여기에서 DB 접속하고, 테이블 생성");
const AppDataSource = new DataSource({
    type: "postgres",
    // 노션 참조
    entities: [Board],
});

AppDataSource.initialize()
    .then(() => {
        console.log("DB 접속 성공. 동기화 시작");

        // 4. 최종 완성된 아폴로서버 실행시키기(리스닝하기 => 대기하기)
        startStandaloneServer(server, {
            listen: { port: 4000 },
        }).then(() => {
            console.log("그래프큐엘 서버 실행");
        });
    })
    .catch((error) => {
        console.log("DB 접속 실패");
        console.log("원인 : ", error);
    });
