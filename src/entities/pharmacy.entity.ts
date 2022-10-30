import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { categories } from "./category.entity";

@Entity()

export class pharmacy {
    @PrimaryGeneratedColumn('uuid')
    pharmacy_id: string;

    @Column({nullable:false})
    pharmacy_title: string;

    @Column({nullable:false})
    pharmacy_desc: string;

    @Column({nullable:false})
    pharmacy_img: string;

    @Column({nullable:false})
    pharmacy_lang: string;

    @Column({nullable:false})
    pharmacy_price: string;

    @ManyToOne(() => categories, category => category.pharmacies, {onDelete:'CASCADE'})
    category: categories
}