import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSchema1622140350210 implements MigrationInterface {
    name = 'CreateSchema1622140350210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "doctors" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "crm" varchar NOT NULL, "phone" varchar NOT NULL, "cel" varchar NOT NULL, "zipcode" varchar NOT NULL, "address" varchar NOT NULL, "specialties" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "doctors"`);
    }

}
