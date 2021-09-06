# Translucent Test

The test consists of creating an application to store and control a game catalog. In this test, a web application was created in which an ordered listing and registration of the games are made, and a backend application where communication with the frontend application is made.

## Comments

The application prototype can be accessed using the address: https://www.figma.com/file/UdOfjE1u6PmlCQZZpGRyZW/Games-Catalog-Tc?node-id=0%3A1

For the frontend application, ReactJS was used using Typescript, Styled Components, and the UI material for component styling. Forms were validated using Yup and Formik libraries.

The backend application was made with spring-boot and using the PostgreSQL database. The handling and customization of exceptions that can be generated in the application following the business rules were produced. The API was documented using the swagger.
It can be used by http://localhost:8080/swagger-ui.html#/.

* Backend application tests can be applied using the following command.

```
mvn test
```
## Instructions for running the application

After cloning this repository, to run the application, it is first necessary to run the command to enter the application's backend folder.

```
cd game-catalog 
```
Next, you will need to run the server.sh file to initialize the dockers images for the frontend and backend.

```
sh server.sh
```
If necessary, enter your administrator password.

Wait for the creation of the images created for the backend and the front end. When the creation is finished, you can access the endpoints http://localhost:8080/games to view the games previously registered in the backend and http://localhost:3000/ to access the frontend application.

## Considerations

* The frontend and backend application has been dockerized and can be run using docker-compose.

* The frontend application is relatively responsive

* Redux-saga was used to manage the application status

* There is a search field for the game list.

* There are some seeded games.