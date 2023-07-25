import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1690248560738 implements MigrationInterface {
    name = 'CreateUserTable1690248560738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_7bf57c28a8238d97fd519435442"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "telephone" character varying(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_7bf57c28a8238d97fd519435442" UNIQUE ("telephone")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_7bf57c28a8238d97fd519435442"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "telephone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_7bf57c28a8238d97fd519435442" UNIQUE ("telephone")`);
    }

}
