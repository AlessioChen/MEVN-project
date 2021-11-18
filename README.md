# MEVN-project

## ENDPOINTS

#### GET - All blogs

```
/blogs/allBlogs
```

##### Success - 200

```
HTTP/1.1 200 OK
[
    {
        "_id": "6195aaec3911af0313ee6482",
        "title": "Primo Blog",
        "content": "Un bellissimo blog",
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

Ritorna un array con tutti i blog in ordine di pubblicazione.

---

#### GET - Single blog

```
/blogs/singleBlog/:id
```

##### Success - 200

```
HTTP/1.1 200 OK
{
    "_id": "6195aaec3911af0313ee6482",
    "title": "Primo Blog",
    "content": "Un bellissimo blog",
    "createdAt": "2021-11-18T01:22:52.892Z",
    "updatedAt": "2021-11-18T01:22:52.892Z",
    "__v": 0
}
```

##### Note:

Ritorna il blog richiesto tramite id.

---

#### POST - Single blog

```
/blogs/singleBlog
```

##### request.body

```
{
    "title": "Secondo Blog",
    "content": "Un altro bellissimo blog"
}
```

##### Success - 200

```
HTTP/1.1 200 OK
{
    "title": "Secondo Blog",
    "content": "Un altro bellissimo blog",
    "_id": "6195af40a1c0f41c815b5b66",
    "createdAt": "2021-11-18T01:41:20.143Z",
    "updatedAt": "2021-11-18T01:41:20.143Z",
    "__v": 0
}
```

##### Note:

Ritorna il blog inserito. I parametri da inserire nel *body* della *request* sono (per adesso) solo *title* e *content*, id e date (creazione e aggiornamento) vengono inseriti automaticamente.

---

#### PUT - Single blog

```
/blogs/singleBlog/:id
```

##### request.body

```
{
    "title": "Secondo Blog aggiornato",
    "content": "Un altro bellissimo blog aggiornato"
}
```

##### Success - 200

```
HTTP/1.1 200 OK
{
    "_id": "6195af40a1c0f41c815b5b66",
    "title": "Secondo Blog aggiornato",
    "content": "Un altro bellissimo blog aggiornato",
    "createdAt": "2021-11-18T01:41:20.143Z",
    "updatedAt": "2021-11-18T01:46:11.068Z",
    "__v": 0
}
```

##### Note:

Ritorna il blog aggiornato. La data di aggiornamento viene modificata automaticamente.


---

#### DELETE - Single blog

```
/blogs/singleBlog/:id
```

##### Success - 200

```
HTTP/1.1 200 OK
{
    "_id": "6195af40a1c0f41c815b5b66",
    "title": "Secondo Blog aggiornato",
    "content": "Un altro bellissimo blog aggiornato",
    "createdAt": "2021-11-18T01:41:20.143Z",
    "updatedAt": "2021-11-18T01:46:11.068Z",
    "__v": 0
}
```

##### Note:

Ritorna il blog eliminato.