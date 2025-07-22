import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

console.log("백엔드 프로그램 시작");

console.log("여기에서 API 생성");
// 1. API_DOCS 만들기
const typeDefs = `#graphql

    input CreateBoardInput {
        writer: String
        title: String
        contents: String
    }

    type MyBoard {
        id: Int
        writer: String
        title: String
        contents: String
    }

    type Query {
        fetchBoards: [MyBoard]
    }

    type Mutation {
        # 연습용 (main-example 방식)
        # createBoard(writer: String, title: String, contents: String): String!

        # 실무용 (main-practice 방식)
        createBoard(createBoardInput: CreateBoardInput!) : String!
    }
`;

// 2. API 만들기
const resolvers = {
    Query: {
        fetchBoards: async () => {
            // 1. 모두 꺼내기
            const result = await Board.find();
            return result;

            // 2. 한 개만 꺼내기
            // const result = await Board.findOne({
            //     where: { number: 3 },
            // });
            // return result;
        },
    },

    Mutation: {
        createBoard: async (parent: any, args: any, context: any, info: any) => {
            await Board.insert({
                // writer: args.createBoardInput.writer,
                // title: args.createBoardInput.title,
                // contents: args.createBoardInput.contents
                ...args.createBoardInput, // 위 코드 3줄을 스프레드 연산자로 함축해서 사용
            });
            return "게시글 등록 성공";
        },

        // updateBoard: () => {
        //     // ex) 3번 게시글의 작성자를 훈이로 변경
        //     Board.update({ id: 3 }, { writer: "훈이" });
        // },

        // deleteBoard: () => {
        //     // ex) 3번 게시글 삭제
        //     Board.delete({ id: 3 });
        //     Board.update({id:3}, {isDeleted: true}); // 소프트딜리트(3번 게시글 삭제했다고 치는 것)
        //     Board.update({id:3}, {deletedAt: new Date()}) // 소프트딜리트 => 시간까지 기록 가능한 방법
        //     Board.softRemove(); // 내장 소프트딜리트
        // },
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
