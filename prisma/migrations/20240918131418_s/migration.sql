-- CreateTable
CREATE TABLE `Cardapio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` INTEGER NOT NULL,
    `idEstabelecimento` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estabelecimento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cnpj` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `telefone` INTEGER NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `horario` INTEGER NOT NULL,
    `tipo_estabelecimento` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Estabelecimento_cnpj_key`(`cnpj`),
    UNIQUE INDEX `Estabelecimento_email_key`(`email`),
    UNIQUE INDEX `Estabelecimento_senha_key`(`senha`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mesa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NOT NULL,
    `capacidade` INTEGER NOT NULL,
    `idEstabelecimento` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` INTEGER NOT NULL,
    `hora` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `idEstabelecimento` INTEGER NOT NULL,
    `idMesa` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `preco` INTEGER NOT NULL,
    `imagem` VARCHAR(191) NOT NULL,
    `idCategoria` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PedidoProduto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `produtoId` INTEGER NOT NULL,
    `pedidoId` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `tipo` ENUM('PF', 'PJ') NOT NULL,
    `documento` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `data_criacao` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `idEstabelecimento` INTEGER NOT NULL,
    `tipo_estabelecimento` ENUM('Sorveteria', 'Restaurante', 'Lanchonete', 'Pesqueiro', 'Bar', 'Pizzaria') NOT NULL,

    UNIQUE INDEX `Cliente_documento_key`(`documento`),
    UNIQUE INDEX `Cliente_email_key`(`email`),
    UNIQUE INDEX `Cliente_senha_key`(`senha`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cardapio` ADD CONSTRAINT `Cardapio_idEstabelecimento_fkey` FOREIGN KEY (`idEstabelecimento`) REFERENCES `Estabelecimento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mesa` ADD CONSTRAINT `Mesa_idEstabelecimento_fkey` FOREIGN KEY (`idEstabelecimento`) REFERENCES `Estabelecimento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_idEstabelecimento_fkey` FOREIGN KEY (`idEstabelecimento`) REFERENCES `Estabelecimento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_idMesa_fkey` FOREIGN KEY (`idMesa`) REFERENCES `Mesa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_idCategoria_fkey` FOREIGN KEY (`idCategoria`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidoProduto` ADD CONSTRAINT `PedidoProduto_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `Produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidoProduto` ADD CONSTRAINT `PedidoProduto_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `Pedido`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cliente` ADD CONSTRAINT `Cliente_idEstabelecimento_fkey` FOREIGN KEY (`idEstabelecimento`) REFERENCES `Estabelecimento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
