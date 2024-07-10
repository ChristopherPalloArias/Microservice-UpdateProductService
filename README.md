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
3. [Program Execution](#program-execution)
   - [Execute Microservice](#execute-microservice)
4. [DockerHub](#dockerhub)
   - [DockerHub Repository](#dockerhub-repository)
5. [AWS](#aws)
   - [Evidence](#evidence-create)


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
Before starting the application you must change the database credentials in the index.js file if you want to use the application locally and independently, this is because initially the application is configured to be used in conjunction with the rest of the Microservices.

Port Verification

Current:
```sh
const port = 8084;
```

## Program Execution
### Execute Microservice

```sh
npm run start
```

## DockerHub
### DockerHub Repository

https://hub.docker.com/r/christopherpallo2000/cp-update-product-service

Docker Pull Command
```sh
docker pull christopherpallo2000/cp-update-product-services
```

## AWS
### Evidence
Summary of the Instance
![image](https://github.com/ChristopherPalloArias/Microservice-ListProductService/assets/87538474/882a9ea1-9f1d-45a7-9cc1-724d55b2a0d8)
Service running on the instance IP
![image](https://github.com/ChristopherPalloArias/Microservice-UpdateProductService/assets/87538474/d504b133-1d63-4a0a-94d1-c81659cb9fa0)
