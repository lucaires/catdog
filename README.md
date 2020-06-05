# Instagram Clone

A simple clone of Instagram with the purpose of testing the following stack: NodeJS, React, React Native and MongoDB. This project uses a cloud MongoDB service called: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

The project is separated as follows:

## backend

A NodeJS application that allows you to store and list post information in a Mongo database through a REST API. This application also uses WebSocket to update the web and mobile application in real time.

### Dependencies

The main dependencies used in this application are:

``` json
"cors":  "2.8.5",
"express":  "4.17.1",
"mongoose":  "5.5.14",
"multer":  "1.4.1",
"sharp":  "0.22.1",
"socket.io":  "2.2.0"
```

### Running

Make sure you have **NodeJS** v10 or greater installed:
``` bash
node -v
```

Clone the project:
``` bash
git clone https://github.com/fabiodelabruna/instagram-clone.git
```

Access the `backend` directory and install package dependencies using `npm` or `yarn`:
``` bash
npm install
```
``` bash
yarn install
```

Run the `dev` script:
``` bash
npm dev
```
``` bash
yarn dev
```

The application will setup on port `3333`.

### Testing

The following describes the operations supported by the REST API and how you can test it.

#### Creating posts:

Method: ``` POST ```
URL: ``` http://localhost:3333/posts ```
Content-Type: ``` Multipart form data ```

Request Example:
 ```
(File) image:sample.jpg
(String) author:Fabio Dela Bruna
(String) place:Florianópolis
(String) description:Working...
(String) hashtags:#working #nodejs #react #reactnative
```

Response Example:
```json
{
  "likes": 0,
  "_id": "5cffe4db0e081c3cf71474c1",
  "author": "Fabio Dela Bruna",
  "place": "Florianópolis",
  "description": "Working...",
  "hashtags": "#working #nodejs #react #reactnative",
  "image": "sample.jpg",
  "createdAt": "2019-06-11T17:28:59.214Z",
  "updatedAt": "2019-06-11T17:28:59.214Z",
  "__v": 0
}
```

#### Listing posts:

Method: ``` GET ```
URL: ``` http://localhost:3333/posts ```

Request Example:
``` http://localhost:3333/posts ```

Response Example:  
```json
{
  "likes": 5,
  "_id": "5cffe4db0e081c3cf71474c1",
  "author": "Fabio Dela Bruna",
  "place": "Florianópolis",
  "description": "Working...",
  "hashtags": "#working #nodejs #react #reactnative",
  "image": "sample.jpg",
  "createdAt": "2019-06-11T17:28:59.214Z",
  "updatedAt": "2019-06-11T17:28:59.214Z",
  "__v": 0
},
{
  "likes": 13,
  "_id": "5cffd366459073281b60c054",
  "author": "Fabio Dela Bruna",
  "place": "Florianópolis",
  "description": "A great day!",
  "hashtags": "#greatday",
  "image": "greatday.jpg",
  "createdAt": "2019-06-11T07:15:24.125Z",
  "updatedAt": "2019-06-11T07:15:24.125Z",
  "__v": 0
}
```

#### Liking posts:

Method: ``` POST ```
URL: ``` http://localhost:3333/posts/:postId/like ```

Request Example:
``` http://localhost:3333/posts/5cffd366459073281b60c054/like ```

Response Example:
```json
{
  "likes": 14,
  "_id": "5cffd366459073281b60c054",
  "author": "Fabio Dela Bruna",
  "place": "Florianópolis",
  "description": "A great day!",
  "hashtags": "#greatday",
  "image": "greatday.jpg",
  "createdAt": "2019-06-11T07:15:24.125Z",
  "updatedAt": "2019-06-11T10:12:01.045Z",
  "__v": 0
}
```

## frontend-web

Working on it...

## frontend-mobile

Working on it...
