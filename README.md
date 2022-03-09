<h1 align="center"> User Authentication Microservice </h1> 

This project was created to build a REST API with Node.JS + Express, using the postgress database.

In the project, an authentication microservice (MS) was created for the management of new user registrations and the authentication of this user on the platform. For this, we had two forms of authentication:
- Base-authentication: which is the simplest form of authentication and that the HTTP protocol itself specifies;
- JWT: where a token is generated that guarantees some consistency.

To login to the system, the application works like this:

** DESENHO 1 **

Client applications (browser, client cell phone and others) request login to the system and then the Node.JS Authentication Microservice validates if the login information is ok. And if everything is ok, it returns a JWT authentication token and then the client is authenticated to the system.

For ordering products, the application works like this:

** DESENHO 2 **

Client applications request the list of products, sending the token previously received at login, to the Product Microservice. Then this product MS asks the authentication MS if the token is valid, and if it is valid, the Product MS responds to the request with the list of products.


In the authentication microservice we will have:

User CRUD:
- GET / users -> to show all users
- GET /users/:uuid -> to get a specific user
- POST / users -> to add a new user
- PUT /users/:uuid -> to change a specific user
- DELETE /users/:uuid -> to remove a specific user

Authentication: (There are 2 more auxiliary endpoints for other applications to authenticate themselves)
- POST / token -> operation to get the token and login
- POST / token / validate -> operation to validate the token


The technologies mentioned below were used for the development of the project:
- Node.JS, Typescript, Express.JS, PostgreSQL, Postman, Git and the Visual Studio Code IDE was used as source code editor. 
** (ICONS) **