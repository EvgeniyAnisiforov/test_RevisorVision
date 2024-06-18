import { faker } from "@faker-js/faker/locale/ru";
import fs from "fs";

// Генерируем пользователей
const generateUsers = (numUsers) => {
  return [...Array(numUsers)].map(() => ({
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
  }));
};
// Генерируем альбомы для пользователей
const generateAlbums = (numAlbums, users) => {
  return users.flatMap((user) =>
    [...Array(numAlbums)].map(() => ({
      albumId: faker.string.uuid(),
      userId: user.id,
      title: faker.lorem.sentence(),
    }))
  );
};

// Генерируем фото для альбомов
const generatePhotos = (numPhotos, albums) => {
  return albums.flatMap((album) =>
    [...Array(numPhotos)].map(() => ({
      albumId: album.albumId,
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      url: faker.image.urlLoremFlickr({
        width: 150,
        height: 150,
        category: "cats",
      }),
    }))
  );
};

const users = generateUsers(10);
const albums = generateAlbums(5, users);
const photos = generatePhotos(10, albums);

fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
fs.writeFileSync("albums.json", JSON.stringify(albums, null, 2));
fs.writeFileSync("photos.json", JSON.stringify(photos, null, 2));
