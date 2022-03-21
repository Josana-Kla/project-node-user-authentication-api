<div id="top"></div>
<h1 align="center"> User Authentication Microservice </h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=node&message=v16.13.2&color=orange" alt="node version">
  <img src="https://img.shields.io/static/v1?label=npm%20version&message=8.1.2&color=orange" alt="npm version">
  <a href="//www.linkedin.com/in/josana/"><img src="https://img.shields.io/badge/LINKEDIN-blue" alt="LinkedIn"></a> 
 </p>
 <p align="center">
  <img src="https://img.shields.io/badge/STATUS-IMPROVING-yellow">
</p> 

> Project Status: 🟡 improving

### Topics  

:small_blue_diamond: [Project description](#project-description)

:small_blue_diamond: [Getting start](#getting-start)

:small_blue_diamond: [Project features](#project-features)

:small_blue_diamond: [Technologies used](#technologies-used)

:small_blue_diamond: [Developed by](#developed-by)

:small_blue_diamond: [Contacts](#contacts)


</br>

## <a name=“project-description”>🧾Project description<a/> 
  
<p align="justify">
In this project was created a REST API with Node.JS + Express, using the postgress database.

In the project, an authentication microservice (MS) was created for the management of new user registrations and the authentication of this user on the platform. For this, we had two forms of authentication:
- *Base-authentication*: which is the simplest form of authentication and that the HTTP protocol itself specifies;
- *JWT*: where a token is generated that guarantees some consistency.
</p>

<p align="right">(<a href="#top">Back to top</a>)</p>

## <a name=“getting-start”>📁Getting start<a/> 
  
Getting start the User Authentication Microservice project in your local dev environment is very easy. You just need to be sure you have [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/) installed, then follow the directions below.

1. Clone the source code

 `git clone https://github.com/Josana-Kla/project-node-user-authentication-api.git`

2. Install development dependencies

 `npm install`

3. Run a local development server

 `npm start`

It's done! The User Authentication Microservice project is now running!

🔸 You can also access the project's source code [here](https://github.com/Josana-Kla/project-node-user-authentication-api).  

<p align="right">(<a href="#top">Back to top</a>)</p>

## <a name=“project-features”>🔨Project features<a/> 

### To login to the system, the application works like this:
</br>
<p align="center">
<img src= "/public/assets/img/authentication-ms.png"/>
</p>
Client applications (browser, client cell phone and others) request login to the system and then the Node.JS Authentication Microservice validates if the login information is ok. And if everything is ok, it returns a JWT authentication token and then the client is authenticated to the system.

<p align="right">(<a href="#top">Back to top</a>)</p>

### For ordering products, the application works like this:
</br>
<p align="center">
<img src= "/public/assets/img/product-ms.png"/>
</p>
Client applications request the list of products, sending the token previously received at login, to the Product Microservice. Then this product MS asks the authentication MS if the token is valid, and if it is valid, the Product MS responds to the request with the list of products.

<p align="right">(<a href="#top">Back to top</a>)</p>

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

<p align="right">(<a href="#top">Back to top</a>)</p>

## <a name=“technologies-used”>✔Technologies used<a/> 

### The technologies mentioned below were used for the development of the project:
- [Node.JS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express.JS](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Postman](https://www.postman.com/)
- [Git](https://git-scm.com/)
- [Visual Studio Code IDE](https://code.visualstudio.com/)

<p align="right">(<a href="#top">Back to top</a>)</p>

## <a name=“developed-by”>👩‍💻Developed by<a/> 

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Josana-Kla/">
        <img src="https://avatars.githubusercontent.com/u/73187817?s=400&u=343a33ac5cbd16538d7c39b20e42764dfcf1c7e0&v=4" title="Josana Klagenberg" alt="Desenvolvido por Josana Klagenberg" width=115><br/>
        <sub><b>Josana Klagenberg</b></sub>
      </a>
    </td>
  </tr>
</table>

<p align="right">(<a href="#top">Back to top</a>)</p>

## <a name=“contacts”>☎Contacts<a/>

**LinkedIn:** [/josana](https://www.linkedin.com/in/josana/) 

**E-mail**: [josana.0205@gmail.com](mailto:josana.0205@gmail.com)

**GitHub Profile:** [/Josana-Kla](https://github.com/Josana-Kla)

<p align="right">(<a href="#top">Back to top</a>)</p>
