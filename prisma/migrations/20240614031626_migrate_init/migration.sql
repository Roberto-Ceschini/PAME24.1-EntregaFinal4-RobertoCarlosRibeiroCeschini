/*
  Warnings:

  - You are about to alter the column `validade` on the `Ingrediente` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
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
