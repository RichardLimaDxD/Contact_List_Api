import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifyTables1690324373231 implements MigrationInterface {
    name = 'ModifyTables1690324373231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Contacts" DROP CONSTRAINT "UQ_04df09c4689f5fa899478f5883f"`);
        await queryRunner.query(`ALTER TABLE "Contacts" DROP CONSTRAINT "UQ_e21d198c32f66a0e53bf7c46def"`);
        await queryRunner.query(`ALTER TABLE "Contacts" DROP CONSTRAINT "UQ_a0e766d53c2e69d5b11474ed6e0"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_7d9620bf258e02412774fcc5e23"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_7bf57c28a8238d97fd519435442"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_7bf57c28a8238d97fd519435442" UNIQUE ("telephone")`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_7d9620bf258e02412774fcc5e23" UNIQUE ("fullname")`);
        await queryRunner.query(`ALTER TABLE "Contacts" ADD CONSTRAINT "UQ_a0e766d53c2e69d5b11474ed6e0" UNIQUE ("telephone")`);
        await queryRunner.query(`ALTER TABLE "Contacts" ADD CONSTRAINT "UQ_e21d198c32f66a0e53bf7c46def" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "Contacts" ADD CONSTRAINT "UQ_04df09c4689f5fa899478f5883f" UNIQUE ("fullname")`);
    }

}
