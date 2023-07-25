import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1690300937306 implements MigrationInterface {
    name = 'CreateUserTable1690300937306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" SERIAL NOT NULL, "fullname" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "telephone" character varying(11) NOT NULL, "password" character varying(120) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "UQ_7d9620bf258e02412774fcc5e23" UNIQUE ("fullname"), CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "UQ_7bf57c28a8238d97fd519435442" UNIQUE ("telephone"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
