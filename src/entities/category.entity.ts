import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { pharmacy } from "./pharmacy.entity";

@Entity()

export class categories {
    @PrimaryGeneratedColumn('uuid')
    category_id: string
    
    @Column({nullable:false})
    category_title: string

    @Column({nullable:false})
    category_lang:string

    @OneToMany(() => pharmacy, pharmacies => pharmacies.category, {onDelete: 'CASCADE'})
    pharmacies: pharmacy[]
}