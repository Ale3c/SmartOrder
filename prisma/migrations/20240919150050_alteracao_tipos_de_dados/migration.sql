/*
  Warnings:

  - You are about to alter the column `tipo_estabelecimento` on the `Estabelecimento` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.

*/
-- AlterTable
ALTER TABLE `Estabelecimento` MODIFY `cnpj` VARCHAR(191) NOT NULL,
    MODIFY `telefone` VARCHAR(191) NOT NULL,
    MODIFY `horario` VARCHAR(191) NOT NULL,
    MODIFY `tipo_estabelecimento` ENUM('Sorveteria', 'Restaurante', 'Lanchonete', 'Pesqueiro', 'Bar', 'Pizzaria') NOT NULL;
