import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitialTale1622171803502 implements MigrationInterface {
    name = 'InitialTale1622171803502'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE "expertise" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)')
      await queryRunner.query('CREATE TABLE "doctors" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "crm" varchar NOT NULL, "phone" varchar NOT NULL, "cel" varchar NOT NULL, "zipcode" varchar NOT NULL, "address" varchar NOT NULL)')
      await queryRunner.query('CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime(\'now\')), "updatedAt" datetime NOT NULL DEFAULT (datetime(\'now\')), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"))')
      await queryRunner.query('CREATE TABLE "doctors_expertises_expertise" ("doctorsId" integer NOT NULL, "expertiseId" integer NOT NULL, PRIMARY KEY ("doctorsId", "expertiseId"))')
      await queryRunner.query('CREATE INDEX "IDX_d4c810e9755fe9139b4f309f73" ON "doctors_expertises_expertise" ("doctorsId") ')
      await queryRunner.query('CREATE INDEX "IDX_f00c893b66e12f71aea22ff7d2" ON "doctors_expertises_expertise" ("expertiseId") ')
      await queryRunner.query('DROP INDEX "IDX_d4c810e9755fe9139b4f309f73"')
      await queryRunner.query('DROP INDEX "IDX_f00c893b66e12f71aea22ff7d2"')
      await queryRunner.query('CREATE TABLE "temporary_doctors_expertises_expertise" ("doctorsId" integer NOT NULL, "expertiseId" integer NOT NULL, CONSTRAINT "FK_d4c810e9755fe9139b4f309f73e" FOREIGN KEY ("doctorsId") REFERENCES "doctors" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_f00c893b66e12f71aea22ff7d24" FOREIGN KEY ("expertiseId") REFERENCES "expertise" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("doctorsId", "expertiseId"))')
      await queryRunner.query('INSERT INTO "temporary_doctors_expertises_expertise"("doctorsId", "expertiseId") SELECT "doctorsId", "expertiseId" FROM "doctors_expertises_expertise"')
      await queryRunner.query('DROP TABLE "doctors_expertises_expertise"')
      await queryRunner.query('ALTER TABLE "temporary_doctors_expertises_expertise" RENAME TO "doctors_expertises_expertise"')
      await queryRunner.query('CREATE INDEX "IDX_d4c810e9755fe9139b4f309f73" ON "doctors_expertises_expertise" ("doctorsId") ')
      await queryRunner.query('CREATE INDEX "IDX_f00c893b66e12f71aea22ff7d2" ON "doctors_expertises_expertise" ("expertiseId") ')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP INDEX "IDX_f00c893b66e12f71aea22ff7d2"')
      await queryRunner.query('DROP INDEX "IDX_d4c810e9755fe9139b4f309f73"')
      await queryRunner.query('ALTER TABLE "doctors_expertises_expertise" RENAME TO "temporary_doctors_expertises_expertise"')
      await queryRunner.query('CREATE TABLE "doctors_expertises_expertise" ("doctorsId" integer NOT NULL, "expertiseId" integer NOT NULL, PRIMARY KEY ("doctorsId", "expertiseId"))')
      await queryRunner.query('INSERT INTO "doctors_expertises_expertise"("doctorsId", "expertiseId") SELECT "doctorsId", "expertiseId" FROM "temporary_doctors_expertises_expertise"')
      await queryRunner.query('DROP TABLE "temporary_doctors_expertises_expertise"')
      await queryRunner.query('CREATE INDEX "IDX_f00c893b66e12f71aea22ff7d2" ON "doctors_expertises_expertise" ("expertiseId") ')
      await queryRunner.query('CREATE INDEX "IDX_d4c810e9755fe9139b4f309f73" ON "doctors_expertises_expertise" ("doctorsId") ')
      await queryRunner.query('DROP INDEX "IDX_f00c893b66e12f71aea22ff7d2"')
      await queryRunner.query('DROP INDEX "IDX_d4c810e9755fe9139b4f309f73"')
      await queryRunner.query('DROP TABLE "doctors_expertises_expertise"')
      await queryRunner.query('DROP TABLE "users"')
      await queryRunner.query('DROP TABLE "doctors"')
      await queryRunner.query('DROP TABLE "expertise"')
    }
}
