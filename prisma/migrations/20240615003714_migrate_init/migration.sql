/*
  Warnings:

  - You are about to drop the column `ingredienteId` on the `Estoque` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade` on the `Ingrediente` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Estoque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "produtoId" INTEGER,
    CONSTRAINT "Estoque_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Estoque" ("id", "produtoId") SELECT "id", "produtoId" FROM "Estoque";
DROP TABLE "Estoque";
ALTER TABLE "new_Estoque" RENAME TO "Estoque";
CREATE TABLE "new_Ingrediente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "validade" DATETIME NOT NULL,
    "fornecedor" TEXT NOT NULL
);
INSERT INTO "new_Ingrediente" ("fornecedor", "id", "nome", "validade") SELECT "fornecedor", "id", "nome", "validade" FROM "Ingrediente";
DROP TABLE "Ingrediente";
ALTER TABLE "new_Ingrediente" RENAME TO "Ingrediente";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
