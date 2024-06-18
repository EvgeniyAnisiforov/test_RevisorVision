# revisor-test-api

API для тестового задания

# Инструкция по запуску

### Клонируем репозитарий

```
git clone git@github.com:Tozix/revisor-test-api.git

```

### Установка зависимостей

```
cd revisor-test-api
npm i
```

### Запуск приложения

```
npm run start
```

Enjoy!!!

# Эндпоинты

## Получить информацию о пользователе

```
GET /users/:userId
```

### Пример ответа

```
{
    "id": "6a62228f-4873-43a4-8a79-0fda55f5e089",
    "name": "Жанна",
    "username": "Evdokim22",
    "email": "Milen.OHara39@yandex.ru"
}
```

## Получить список пользователей

```
GET /users/
```

### Пример ответа

```
[
    {
        "id": "6a62228f-4873-43a4-8a79-0fda55f5e089",
        "name": "Жанна",
        "username": "Evdokim22",
        "email": "Milen.OHara39@yandex.ru"
    },
    {
        "id": "9f2483a8-69a1-4f90-9160-ec291ed32fdf",
        "name": "Савва",
        "username": "Vyacheslav84",
        "email": "Fedor.OReilly@yandex.ru"
    },

    ...

    {
        "id": "632c5b4f-f54c-4da9-99bd-902e30704646",
        "name": "Якуб",
        "username": "Maksimilukyan80",
        "email": "Onufrii.Ziemann@gmail.com"
    }
]
```

## Получить альбомы пользователя

```
GET /albums/:userId
```

### Пример ответа

```
[
    {
        "albumId": "e55ec6c0-8991-44a7-bda4-1c0e435d171d",
        "userId": "9f2483a8-69a1-4f90-9160-ec291ed32fdf",
        "title": "На активности внедрения управление общественной постоянное с."
    },
    {
        "albumId": "5feb7988-202d-49d8-b940-8865caba4f3d",
        "userId": "9f2483a8-69a1-4f90-9160-ec291ed32fdf",
        "title": "Нами важные место деятельности степени работы соответствующей гражданского формировании."
    },
    {
        "albumId": "c2d48df7-23db-4b1b-a6dc-f2cfe13ce88c",
        "userId": "9f2483a8-69a1-4f90-9160-ec291ed32fdf",
        "title": "Шагов сознания обучения постоянное реализация."
    },
    ...

    {
        "albumId": "c6f1f41e-2a6c-4a4c-add1-00ed6f1b21dd",
        "userId": "9f2483a8-69a1-4f90-9160-ec291ed32fdf",
        "title": "За требует проверки финансовых инновационный нами проверки."
    },
]
```

## Получить фотографии альбома

```
GET /photos/:albumId
```

### Пример ответа

```
[
    {
        "albumId": "c2d48df7-23db-4b1b-a6dc-f2cfe13ce88c",
        "id": "749b9cc9-edf8-46f9-9f65-d01aa2c3d87f",
        "title": "Задания задача и правительством требует за сомнений реализация значимость особенности.",
        "url": "https://loremflickr.com/150/150/cats?lock=3339024624254976"
    },
    {
        "albumId": "c2d48df7-23db-4b1b-a6dc-f2cfe13ce88c",
        "id": "bb6a41f3-0f3a-41e1-9618-9e258ac5cb09",
        "title": "Оценить постоянное анализа соответствующей реализация повседневная этих за создание на.",
        "url": "https://loremflickr.com/150/150/cats?lock=2042427110064128"
    },

    ...

    {
        "albumId": "c2d48df7-23db-4b1b-a6dc-f2cfe13ce88c",
        "id": "7de48cd1-783c-4638-8518-2b79c7560861",
        "title": "Значимость этих информационно-пропогандистское представляет занимаемых же разнообразный.",
        "url": "https://loremflickr.com/150/150/cats?lock=8457497371213824"
    }
]
```
