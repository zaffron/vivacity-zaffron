import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateApplicantTable1714154593918 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "applicant" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "email" character varying NOT NULL,
                "age" character varying NULL,
                "bio" character varying NULL,
                "profession" character varying NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_7b2d7e6d5b2c4f3f8d5b63b6e6f" PRIMARY KEY ("id")
            )
        `);

        // seed db with my information
        await queryRunner.query(`
            INSERT INTO "applicant" ("name", "email", "age", "bio", "profession") VALUES ('Avinash Rijal', 'avinashrijal@gmail.com', '26', 'I am a full stack developer', 'Software Engineer')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "applicant"
        `);
    }

}
