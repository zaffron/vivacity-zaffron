# Applicant Demo Project
---
Basic project to show the usage of express typescript nodejs server with CRUD operation using typeorm on postgres database

### How to setup
clone the repo:
```git clone git@github.com:zaffron/vivacity-zaffron.git```

change to project directory:

```cd vivacity-zaffron```

copy .env.example to .env:

```cp .env.example .env```

- I assume you have postgres setup beforehand, you can update the credentials for the db on the .env. If not use docker to run db

to run db using docker:

```docker compose up -d```

install dependencies:

```npm install```

run:

```npm run dev```

The project should start in development server

### How to run test

Once the repo is cloned and you are inside the directory follow the following commands:

To run tests:

```npm run test```

To run all tests and watch:

```npm run test:watch```


# Applicant API Documentation

This API allows for managing applicant data in a database using CRUD operations. Below you will find the available endpoints, along with descriptions and usage examples.

## API Endpoints

### Base URL

The base URL for accessing the API is:
http://localhost:3000/

### Attributes of an Applicant

Each applicant has the following attributes:

- `id` (number): Unique identifier for the applicant.
- `name` (string): Name of the applicant.
- `email` (string): Email address of the applicant.
- `age` (string): Age of the applicant.
- `bio` (string): Short biography of the applicant.
- `profession` (string): Profession of the applicant.

### List All Applicants

- **Method:** `GET`
- **Endpoint:** `/`
- **Description:** Retrieves a list of all applicants.

**Example Request:**

GET http://localhost:3000/


**Example Response:**

```json
[
  {
    "id": 1,
    "name": "Jane Doe",
    "email": "jane@example.com",
    "age": "29",
    "bio": "A passionate software engineer.",
    "profession": "Software Engineer"
  }
]
```

### Create an Applicant
- **Method:** `POST`
- **Endpoint:** `/`
- **Description:** Adds a new applicant to the database.
- **Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": "34",
  "bio": "Experienced marketing specialist.",
  "profession": "Marketing"
}
```

Example Response:


```json
{
  "id": 2,
  "name": "John Doe",
  "email": "john@example.com",
  "age": "34",
  "bio": "Experienced marketing specialist.",
  "profession": "Marketing"
}
```

### Get an Applicant
- **Method:** `GET`
- **Endpoint:** `/:id`
- **Description:** Retrieves an applicant by their ID.
- **Example Request:**

GET http://localhost:3000/1

Example Response:

```json
{
  "id": 1,
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": "29",
  "bio": "A passionate software engineer.",
  "profession": "Software Engineer"
}
```

### Update an Applicant
- **Method:** `PUT`
- **Endpoint:** `/:id`
- **Description:** Updates details for an existing applicant.
- **Request Body:**

```json
{
  "name": "Jane Doe Updated",
  "email": "jane.doe@example.com",
  "age": "30",
  "bio": "An experienced developer and tech enthusiast.",
  "profession": "Software Engineer"
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Jane Doe Updated",
  "email": "jane.doe@example.com",
  "age": "30",
  "bio": "An experienced developer and tech enthusiast.",
  "profession": "Software Engineer"
}
```

### Delete an Applicant
- **Method:** `DELETE`
- **Endpoint:** `/:id`
- **Description:** Deletes an applicant by their ID.
- **Example Request:**

DELETE http://localhost:3000/1

Example Response:

```json
Status: 204 No Content
```
