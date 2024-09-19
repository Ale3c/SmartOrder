/*
  Warnings:

  - The `data_criacao` column on the `Cliente` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE `Cliente` DROP COLUMN `data_criacao`,
    ADD COLUMN `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
