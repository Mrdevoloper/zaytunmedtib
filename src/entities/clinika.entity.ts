import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Clinika {
    @PrimaryGeneratedColumn('uuid')
    clinika_id:string;

    @Column({nullable:false})
    clinika_title: string;

    @Column({nullable:false})
    clinika_desc: string;

    @Column({nullable:false})
    clinika_lang: string;

    @Column({nullable:false})
    clinika_img: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    time: string;
}