import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class courses{
    @PrimaryGeneratedColumn('uuid')
    course_id: string;

    @Column({nullable: false})
    course_title: string;

    @Column({nullable: false})
    course_desc: string;

    @Column({nullable: false})
    course_lang: string;

    @Column({nullable: false})
    course_img: string;
}