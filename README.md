# API Node.js with MongoDB

This project is a RESTful API built using **Node.js** and **MongoDB** to demonstrate CRUD (Create, Read, Update, Delete) operations. It provides a modular and scalable approach to interact with a NoSQL database, suitable for small to medium-sized applications.

## Features

- CRUD operations to manage resources.
- MongoDB integration for efficient NoSQL database management.
- Lightweight and modular structure for easy maintenance.
- Error handling for robust API responses.

## Prerequisites

To run this project, ensure you have:

- [Node.js](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/) set up locally or on a cloud service like **MongoDB Atlas**.
- [Postman](https://www.postman.com/) or a similar tool to test the API.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jcastiblancoc/API_Node_Mongodb.git
   cd API_Node_Mongodb
Install dependencies:

bash
npm install
Set up environment variables: Create a .env file in the root directory and configure your MongoDB URI and other settings:

env
Copiar código
MONGO_URI=mongodb://localhost:27017/mydatabase
PORT=3000
Usage
Run the Server
Start the API server:

bash
Copiar código
npm start
The API will be available at http://localhost:3000 (or the port specified in your .env file).

Endpoints
Method	Endpoint	Description
GET	/items	Retrieve all items
GET	/items/:id	Retrieve a single item
POST	/items	Create a new item
PUT	/items/:id	Update an existing item
DELETE	/items/:id	Delete an item by ID
Example Request
GET /items
bash
Copiar código
curl http://localhost:3000/items
POST /items
bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "Sample Item", "value": 42}' http://localhost:3000/items
Project Structure
bash

├── src
│   ├── controllers      # Request handlers
│   ├── models           # Mongoose schemas
│   ├── routes           # API routes
│   ├── utils            # Helper functions
├── .env                 # Environment variables
├── package.json         # Project metadata and dependencies
├── server.js            # Application entry point
├── README.md            # Project documentation
Development
Run in Development Mode
Use nodemon for easier development:

bash

npm install -g nodemon
npm run dev
Testing
Use Postman or similar tools to test the endpoints.
Write unit tests to validate your application logic.
Deployment
To deploy this application, you can use platforms like:

Heroku
AWS Elastic Beanstalk
Vercel
Ensure that your MongoDB instance is accessible from the cloud.

Contributing
Contributions are welcome! Please fork this repository, make changes, and submit a pull request for review.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Resources
Node.js Documentation
MongoDB Documentation
Express.js Documentation
shell

The API endpoint can be accessed at http://localhost:3000/api<service to access>.
