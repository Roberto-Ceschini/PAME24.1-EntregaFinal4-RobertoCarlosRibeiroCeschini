-- CreateTable
CREATE TABLE "Funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "validade" DATETIME NOT NULL,
    "dataFabricacao" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Ingrediente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "validade" TEXT NOT NULL,
    "fornecedor" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Registro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataRegistro" DATETIME NOT NULL,
    "tipo" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "funcionarioId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,
    CONSTRAINT "Registro_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Registro_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Checklist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataEncomenda" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "ingredienteId" INTEGER NOT NULL,
    CONSTRAINT "Checklist_ingredienteId_fkey" FOREIGN KEY ("ingredienteId") REFERENCES "Ingrediente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
