import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitialTale1622262322834 implements MigrationInterface {
    name = 'InitialTale1622262322834'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE "expertise" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_0c1f773f9419573f6bc37eebb7f" PRIMARY KEY ("id"))')
      await queryRunner.query('CREATE TABLE "doctors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "crm" character varying NOT NULL, "phone" character varying NOT NULL, "cel" character varying NOT NULL, "zipcode" character varying NOT NULL, "address" character varying NOT NULL, CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id"))')
      await queryRunner.query('CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))')
      await queryRunner.query('CREATE TABLE "doctors_expertises_expertise" ("doctorsId" integer NOT NULL, "expertiseId" integer NOT NULL, CONSTRAINT "PK_c079fbe8facbef30b2102a5dabf" PRIMARY KEY ("doctorsId", "expertiseId"))')
      await queryRunner.query('CREATE INDEX "IDX_d4c810e9755fe9139b4f309f73" ON "doctors_expertises_expertise" ("doctorsId") ')
      await queryRunner.query('CREATE INDEX "IDX_f00c893b66e12f71aea22ff7d2" ON "doctors_expertises_expertise" ("expertiseId") ')
      await queryRunner.query('ALTER TABLE "doctors_expertises_expertise" ADD CONSTRAINT "FK_d4c810e9755fe9139b4f309f73e" FOREIGN KEY ("doctorsId") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE NO ACTION')
      await queryRunner.query('ALTER TABLE "doctors_expertises_expertise" ADD CONSTRAINT "FK_f00c893b66e12f71aea22ff7d24" FOREIGN KEY ("expertiseId") REFERENCES "expertise"("id") ON DELETE CASCADE ON UPDATE NO ACTION')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE "doctors_expertises_expertise" DROP CONSTRAINT "FK_f00c893b66e12f71aea22ff7d24"')
      await queryRunner.query('ALTER TABLE "doctors_expertises_expertise" DROP CONSTRAINT "FK_d4c810e9755fe9139b4f309f73e"')
      await queryRunner.query('DROP INDEX "IDX_f00c893b66e12f71aea22ff7d2"')
      await queryRunner.query('DROP INDEX "IDX_d4c810e9755fe9139b4f309f73"')
      await queryRunner.query('DROP TABLE "doctors_expertises_expertise"')
      await queryRunner.query('DROP TABLE "users"')
      await queryRunner.query('DROP TABLE "doctors"')
      await queryRunner.query('DROP TABLE "expertise"')
    }
}
