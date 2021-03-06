# Cat Dog

A simple clone of Instagram with the purpose of testing the following stack: NodeJS, React and MongoDB. This project uses a cloud MongoDB service called: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

The project is separated as follows:

## backend

A NodeJS application that allows you to store and list post information in a Mongo database through a REST API. This application also uses WebSocket to update the web application in real time.

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
(String) animal:Bob
(String) tel:21965471456
(String) description:Doguinho dócil e muito amável, precisando de um lar.
(String) adopter:Lucas
```

Response Example:
```json
{
  "likes": 0,
  "_id": "5ed9ddeb932b4736743a48db",
  "animal": "Bob",
  "tel": "21965471456",
  "description": "Doguinho dócil e muito amável, precisando de um lar.",
  "adopter": "Lucas",
  "image": "Array",
      "0" : "f95ec63b-cdd8-4f87-a37f-d6b05a77d58f-cachorro-netinho-coragem-620x373-238b88c4.jpg",
  "createdAt": "2020-06-05T05:53:47.937+00:00",
  "updatedAt": "2020-06-05T05:53:47.937+00:00",
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
  "likes": 3,
  "_id": "5ed9ddeb932b4736743a48db",
  "animal": "Bob",
  "tel": "21965471456",
  "description": "Doguinho dócil e muito amável, precisando de um lar.",
  "adopter": "Lucas",
  "image": "Array",
      "0" : "f95ec63b-cdd8-4f87-a37f-d6b05a77d58f-cachorro-netinho-coragem-620x373-238b88c4.jpg",
  "createdAt": "2020-06-05T05:53:47.937+00:00",
  "updatedAt": "2020-06-05T05:53:47.937+00:00",
  "__v": 0
},
{
  "likes": 0,
  "_id": "5ed9df9a932b4736743a48dc",
  "animal": "Balboa",
  "tel": "21 96574 1566",
  "description": "Gatinha muito linda e boazinha a procura de um dono!",
  "adopter": "Yasmin",
  "image": "Array",
      "0" : "c7fd337a-765a-4e0b-943f-40500c455642-gato.jpg",
  "createdAt": "2020-06-05T06:00:58.950+00:00",
  "updatedAt": "2020-06-05T06:00:58.950+00:00",
  "__v": 0
}
```

#### Liking posts:

Method: ``` POST ```
URL: ``` http://localhost:3333/posts/:postId/like ```

Request Example:
``` http://localhost:3333/posts/5ed9ddeb932b4736743a48db/like ```

Response Example:
```json
{
  "likes": 3,
  "_id": "5ed9ddeb932b4736743a48db",
  "animal": "Bob",
  "tel": "21965471456",
  "description": "Doguinho dócil e muito amável, precisando de um lar.",
  "adopter": "Lucas",
  "image": "Array",
      "0" : "f95ec63b-cdd8-4f87-a37f-d6b05a77d58f-cachorro-netinho-coragem-620x373-238b88c4.jpg",
  "createdAt": "2020-06-05T05:53:47.937+00:00",
  "updatedAt": "2020-06-05T05:53:47.937+00:00",
  "__v": 0
}
```

## frontend-web

### Dependencies

The main dependencies used in this application are:

``` json
"axios": "^0.19.2",
"infinite-react-carousel": "^1.2.11",
"react": "^16.13.1",
"react-dom": "^16.13.1",
"react-router-dom": "^5.1.2",
"react-scripts": "^3.4.1",
"socket.io-client": "^2.3.0"
```

### Running

Make sure you have **ReactJS** installed:
``` bash
npm view react version
```

Access the `frontend` directory and install package dependencies using `npm` or `yarn`:
``` bash
npm install
```
``` bash
yarn install
```

Start project
``` bash
npm start
```
``` bash
yarn start
```
### Main Page

![alt text](https://i.ibb.co/6DBzJvy/catdog6.jpg)

### When you click on photo

![alt text](https://i.ibb.co/mNzvjJD/catdog7.jpg)

### Register post

![alt text](https://i.ibb.co/NCz0R14/catdog5.jpg)

![alt text](https://i.ibb.co/Jx0XH4c/catdog4.jpg)
