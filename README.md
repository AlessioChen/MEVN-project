# MEVN-project

## ENDPOINTS

#### GET - All posts

```
/blog/posts
```

##### Success - 200

```
HTTP/1.1 200 OK
[
    {
        "_id": "6195aaec3911af0313ee6482",
        "title": "Primo Post",
        "content": "Un bellissimo post",
        "createdAt": "2021-11-18T01:22:52.892Z",
        "updatedAt": "2021-11-18T01:22:52.892Z",
        "__v": 0
    },
    {
        "_id": "6195548c0070a12e98dbc12d",
        "title": "edwdew",
        "content": "ewddewdew",
        "createdAt": "2021-11-17T19:14:20.302Z",
        "updatedAt": "2021-11-17T19:14:20.302Z",
        "__v": 0
    }
]
```

##### Note:

Ritorna un array con tutti i posts in ordine di pubblicazione.

---

#### GET - Single post

```
/blog/post/:id
```

##### Success - 200

```
HTTP/1.1 200 OK
{
    "_id": "6195aaec3911af0313ee6482",
    "title": "Primo Post",
    "content": "Un bellissimo post",
    "createdAt": "2021-11-18T01:22:52.892Z",
    "updatedAt": "2021-11-18T01:22:52.892Z",
    "__v": 0
}
```

##### Note:

Ritorna il post richiesto tramite id.

---

#### POST - Single post

```
/blog/post
```

##### req.body

```
{
    "title": "Secondo Post",
    "content": "Un altro bellissimo post"
}
```

##### Success - 200

```
HTTP/1.1 200 OK
{
    "title": "Secondo Post",
    "content": "Un altro bellissimo post",
    "_id": "6195af40a1c0f41c815b5b66",
    "createdAt": "2021-11-18T01:41:20.143Z",
    "updatedAt": "2021-11-18T01:41:20.143Z",
    "__v": 0
}
```

##### Note:

Ritorna il post inserito. I parametri da inserire nel *body* della *req* sono (per adesso) solo *title* e *content*, *id* e date (creazione e aggiornamento) vengono inseriti automaticamente.

---

#### PUT - Single post

```
/blog/post/:id
```

##### req.body

```
{
    "title": "Secondo Post aggiornato",
    "content": "Un altro bellissimo post aggiornato"
}
```

##### Success - 200

```
HTTP/1.1 200 OK
{
    "_id": "6195af40a1c0f41c815b5b66",
    "title": "Secondo Post aggiornato",
    "content": "Un altro bellissimo post aggiornato",
    "createdAt": "2021-11-18T01:41:20.143Z",
    "updatedAt": "2021-11-18T01:46:11.068Z",
    "__v": 0
}
```

##### Note:

Ritorna il post aggiornato. La data di aggiornamento viene modificata automaticamente.


---

#### DELETE - Single post

```
/blogs/post/:id
```

##### Success - 200

```
HTTP/1.1 200 OK
{
    "_id": "6195af40a1c0f41c815b5b66",
    "title": "Secondo Post aggiornato",
    "content": "Un altro bellissimo post aggiornato",
    "createdAt": "2021-11-18T01:41:20.143Z",
    "updatedAt": "2021-11-18T01:46:11.068Z",
    "__v": 0
}
```

##### Note:

Ritorna il post eliminato.