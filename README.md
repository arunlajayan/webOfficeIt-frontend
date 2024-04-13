
## Task

Any additional information goes here




## Deployment

install dependencies

```bash
  npm install 
```

To run this project in developement mode

```bash
  npm run dev
```

To run this project in build mode

```bash
  npm start
```

## Deployment

To run this project in developement mode

```bash
  npm run start:dev
```

To run this project in build mode

```bash
  npm run start
```
## API Reference

#### Get all course

```http
  GET /api/v1/course/all
```


#### Get single item

```http
  GET /api/v1/course/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



#### Delete single item

```http
  Delete /api/v1/course/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### update single item

```http
  Delete /api/v1/course/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Create  course

```http
  CREATE /api/v1/course/all
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. |
| `fee` | `number` | **Required**. |
| `description` | `string` | **Required**. |

