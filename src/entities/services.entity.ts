import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class services {
   @PrimaryGeneratedColumn('uuid')
   services_id: string;

   @Column({nullable:false})
   service_title:string;

   @Column({nullable:false})
   service_desc:string;
   
   @Column({nullable:false})
   service_lang:string;
   
   @Column({nullable:false})
   service_img:string;

}