import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class HomePage{
    @PrimaryGeneratedColumn('uuid')
    home_id: string

    @Column({nullable:false})
    home_title: string

    @Column({nullable:false})
    home_desc: string

    @Column({nullable:false})
    home_lang: string

    @Column({nullable:false})
    home_img: string

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    time: string;

}