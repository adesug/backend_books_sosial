-- CreateTable
CREATE TABLE "tb_user" (
    "id_user" SERIAL NOT NULL,
    "fullname" VARCHAR(70) NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "gender" VARCHAR(10) NOT NULL,
    "alamat" VARCHAR(100) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,
    "img_profil" VARCHAR(50) NOT NULL,

    PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "tb_buku" (
    "id_user" INTEGER NOT NULL,
    "judul_buku" VARCHAR(100) NOT NULL,
    "pengarang" VARCHAR(70) NOT NULL,
    "publisher" VARCHAR(50) NOT NULL,
    "isbn" INTEGER NOT NULL,
    "pages" INTEGER NOT NULL,
    "img_buku" VARCHAR(200) NOT NULL,
    "id_kategori" INTEGER,
    "id_buku" SERIAL NOT NULL,
    "id_rating" INTEGER,

    PRIMARY KEY ("id_buku")
);

-- CreateTable
CREATE TABLE "tb_kategori" (
    "id_kategori" SERIAL NOT NULL,
    "nama_kategori" VARCHAR(50) NOT NULL,
    "img_kategori" VARCHAR(200) NOT NULL,

    PRIMARY KEY ("id_kategori")
);

-- CreateTable
CREATE TABLE "tb_rating" (
    "id_rating" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "id_buku" INTEGER,
    "id_user" INTEGER,
    "komentar" VARCHAR(200),

    PRIMARY KEY ("id_rating")
);

-- AddForeignKey
ALTER TABLE "tb_buku" ADD FOREIGN KEY ("id_kategori") REFERENCES "tb_kategori"("id_kategori") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_buku" ADD FOREIGN KEY ("id_rating") REFERENCES "tb_rating"("id_rating") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_buku" ADD FOREIGN KEY ("id_user") REFERENCES "tb_user"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_rating" ADD FOREIGN KEY ("id_buku") REFERENCES "tb_buku"("id_buku") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_rating" ADD FOREIGN KEY ("id_user") REFERENCES "tb_user"("id_user") ON DELETE SET NULL ON UPDATE CASCADE;
