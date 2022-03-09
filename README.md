<h1 align="center"> User Authentication Microservice </h1> 

![Badge em Aprimoramento](https://img.shields.io/badge/STATUS-APRIMORANDO-yellow)

This project was created to build a REST API with Node.JS + Express, using the postgress database.

In the project, an authentication microservice (MS) was created for the management of new user registrations and the authentication of this user on the platform. For this, we had two forms of authentication:
- *Base-authentication*: which is the simplest form of authentication and that the HTTP protocol itself specifies;
- *JWT*: where a token is generated that guarantees some consistency.
</br>

## :hammer: Project features

### To login to the system, the application works like this:
</br>
<p align="center">
<img src= "/public/assets/img/authentication-ms.png"/>
</p>
Client applications (browser, client cell phone and others) request login to the system and then the Node.JS Authentication Microservice validates if the login information is ok. And if everything is ok, it returns a JWT authentication token and then the client is authenticated to the system.
</br>

### For ordering products, the application works like this:
</br>
<p align="center">
<img src= "/public/assets/img/product-ms.png"/>
</p>
Client applications request the list of products, sending the token previously received at login, to the Product Microservice. Then this product MS asks the authentication MS if the token is valid, and if it is valid, the Product MS responds to the request with the list of products.


### In the authentication microservice we will have:

**User CRUD:**
- GET / users -> to show all users
- GET /users/:uuid -> to get a specific user
- POST / users -> to add a new user
- PUT /users/:uuid -> to change a specific user
- DELETE /users/:uuid -> to remove a specific user

**Authentication: (There are 2 more auxiliary endpoints for other applications to authenticate themselves)**
- POST / token -> operation to get the token and login
- POST / token / validate -> operation to validate the token
</br>

## :heavy_check_mark: Technologies used

### The technologies mentioned below were used for the development of the project:
- ``Node.JS``
- ``Typescript``
- ``Express.JS``
- ``PostgreSQL``
- ``Postman``
- ``Git``
- ``Visual Studio Code IDE`` 
</br>

## :woman_technologist: Developed by

[<img src="https://avatars.githubusercontent.com/u/73187817?s=400&u=343a33ac5cbd16538d7c39b20e42764dfcf1c7e0&v=4" width=115><br><sub>Josana Klagenberg</sub>](https://github.com/Josana-Kla/)

