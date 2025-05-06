/*
  Warnings:

  - You are about to drop the column `descrption` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Post` table. All the data in the column will be lost.
  - Added the required column `content` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Post_title_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "descrption",
DROP COLUMN "imageUrl",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;
