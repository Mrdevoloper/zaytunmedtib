import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Orders{
    @PrimaryGeneratedColumn('uuid')
    order_id:string;

    @Column({nullable:false})
    order_title: string;

    @Column({nullable:false})
    order_user_name: string;

    @Column({nullable:false})
    order_user_phone: string;

    @Column({nullable:false})
    order_user_location: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    time: string;

}