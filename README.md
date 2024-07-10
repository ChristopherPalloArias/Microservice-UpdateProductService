# Update Product Service

This is the microservice for updating products in the MiniMarket inventory.

## Group Members

- Christopher Pallo
- Brayan Davila

## Table of Contents

1. [Microservice Description](#microservice-description)
2. [Installation](#installation)
   - [Requirements](#requirements)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
   - [Start the Server](#start-the-server)
   - [Evidence](#evidence-create)
3. [Usage](#usage)
   - [Verify Server Functionality](#verify-server-functionality)
   - [Add a New Product](#add-a-new-product)
4. [Program Execution](#program-execution)
   - [Create Docker Image](#create-docker-image)
5. [DockerHub](#dockerhub)
   - [DockerHub Repository](#dockerhub-repository)


## Microservice Description

The `update-product-service` microservice is responsible for managing the update of products in the MiniMarket inventory. Allows you to add new products using an HTTP PUT request to the corresponding route.

## Installation

### Requirements

- Node.js
- npm (Node Package Manager)

### Clone the Repository

```sh
git clone https://github.com/ChristopherPalloArias/Microservice-UpdateProductService.git
cd update-product-service
```

### Install Dependencies
```sh
npm install
```

### Start the Server
Before starting the application you must change the database credentials in the index.js file if you want to use the application locally and independently, this is because initially the application is configured to be used in conjunction with the rest of Microservices through Docker-Compose, if you do not want to run the application independently, you must leave the file as it is and subsequently execute the DockerCompose file found in the attached repository, where you will find how to run it, and thus the application It will work together through Dockers.
Repository: [https://github.com/ChristopherPalloArias/Frontend-MinimarketMicroservices](https://github.com/ChristopherPalloArias/Frontend-MinimarketMicroservices)

Changes to run locally and independently
We are located on line of code 5

Current:
```sh
const port = process.env.PORT || 8084;
```
New:
```sh
const port = 8084;
```

We are located on line of code 11 to 16

Current:
```sh
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
```
New:
```sh
const db = mysql.createConnection({
    host: 'mysql-christopherobin.alwaysdata.net',
    user: '358042_admin',
    password: 'YqUZn6T6AxLYc5k',
    database: 'christopherobin_minimarket'
});
```

```sh
npm run start
```

### Evidence
![image](https://github.com/ChristopherPalloArias/Microservice-UpdateProductService/assets/167264603/56cce5be-65a5-4477-b5a3-d55986d4fa0e)



## Usage

### Verify Server Functionality

Method: GET  
URL: `http://localhost:8084/`  
Description: This route displays a message to verify that the server is running.
![image](https://github.com/ChristopherPalloArias/Microservice-UpdateProductService/assets/167264603/b1f505ce-f8cd-4199-a84e-a1aeb85337ea)

### Update a Product

Method: PUT  
URL: `http://localhost:8084/products/Arroz`  
Description: This route allows updating a product to the inventory.  
Example request body (JSON):

```json
{
  "quantity": 50
}
```
![image](https://github.com/ChristopherPalloArias/Microservice-UpdateProductService/assets/167264603/d81544d0-a424-48bd-a637-a21b8eecdc3c)


## Program Execution
### Create Docker Image with DockerFile

```sh
docker build -t update-product-service .
```
![image](https://github.com/ChristopherPalloArias/Microservice-UpdateProductService/assets/167264603/9425759c-93c2-40de-abd5-3da01c366f4f)


## DockerHub
### DockerHub Repository

[christopherpallo2000/cp-update-product-services](https://hub.docker.com/r/christopherpallo2000/cp-update-product-services)

Docker Pull Command
```sh
docker pull christopherpallo2000/cp-update-product-services
```
