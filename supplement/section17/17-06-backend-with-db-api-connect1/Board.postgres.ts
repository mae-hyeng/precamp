import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column({ type: "text" })
    writer!: string;

    @Column({ type: "text" })
    title!: string;

    @Column({ type: "text" })
    contents!: string;

    // 없어도 되는 것들은 !표가 아닌 ? 표로 작성
}
