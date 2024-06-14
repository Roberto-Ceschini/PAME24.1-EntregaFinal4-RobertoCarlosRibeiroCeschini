-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Checklist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataEncomenda" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "ingredienteId" INTEGER,
    CONSTRAINT "Checklist_ingredienteId_fkey" FOREIGN KEY ("ingredienteId") REFERENCES "Ingrediente" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Checklist" ("dataEncomenda", "id", "ingredienteId", "status") SELECT "dataEncomenda", "id", "ingredienteId", "status" FROM "Checklist";
DROP TABLE "Checklist";
ALTER TABLE "new_Checklist" RENAME TO "Checklist";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
