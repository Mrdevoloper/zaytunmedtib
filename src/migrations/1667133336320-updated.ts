import { MigrationInterface, QueryRunner } from "typeorm";

export class updated1667133336320 implements MigrationInterface {
    name = 'updated1667133336320'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("category_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "category_title" character varying NOT NULL, "category_lang" character varying NOT NULL, CONSTRAINT "PK_51615bef2cea22812d0dcab6e18" PRIMARY KEY ("category_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
