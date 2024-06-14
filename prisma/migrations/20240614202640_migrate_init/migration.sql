/*
  Warnings:

  - Added the required column `sabor` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sabor" TEXT NOT NULL,
    "quantidade" INTEGER,
    "validade" DATETIME NOT NULL,
    "dataFabricacao" DATETIME NOT NULL
);
INSERT INTO "new_Produto" ("dataFabricacao", "id", "nome", "quantidade", "validade") SELECT "dataFabricacao", "id", "nome", "quantidade", "validade" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
