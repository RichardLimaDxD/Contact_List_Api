import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateContactTable1690318758873 implements MigrationInterface {
    name = 'CreateContactTable1690318758873'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Contacts" ("id" SERIAL NOT NULL, "fullname" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "telephone" character varying(11) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, "userId" integer, CONSTRAINT "UQ_04df09c4689f5fa899478f5883f" UNIQUE ("fullname"), CONSTRAINT "UQ_e21d198c32f66a0e53bf7c46def" UNIQUE ("email"), CONSTRAINT "UQ_a0e766d53c2e69d5b11474ed6e0" UNIQUE ("telephone"), CONSTRAINT "PK_68782cec65c8eef577c62958273" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Contacts" ADD CONSTRAINT "FK_3559708e3492b03b67d9a35a9d4" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Contacts" DROP CONSTRAINT "FK_3559708e3492b03b67d9a35a9d4"`);
        await queryRunner.query(`DROP TABLE "Contacts"`);
    }

}
