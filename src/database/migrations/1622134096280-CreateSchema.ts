import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSchema1622134096280 implements MigrationInterface {
    name = 'CreateSchema1622134096280'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "doctors" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "crm" varchar NOT NULL, "phone" varchar NOT NULL, "cel" varchar NOT NULL, "zipcode" varchar NOT NULL, "address" varchar NOT NULL, "specialties" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "doctors"`);
    }

}
