import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class courseusers {
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column({nullable:false})
    user_full_name: string;

    @Column({nullable:false})
    user_phone: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    time: string;
}