import { query } from "express";
import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class createEmpresa1603851880755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "empresas",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'cnpj',
                    type: 'double',

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('empresas');
    }

}
