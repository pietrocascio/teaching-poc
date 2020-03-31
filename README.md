# Course Showcase Project

The project highlight some of the most important feature that makes up an Angular project,
Some of the most important building block that constitutes the project are:
- Components
- Services
- Pipes

Moreover the project show the use of the lazy loading in order to load Angular modules in a lazy way.

## Prerequisites
You must have a version of Node.js installed on your machine (it is advice the version 10.19.0 or higher).

The project uses a mock back-end server (`json-server`) that provides REST endpoints starting from a json representation.
In order to start the `json-server`, execute the following command from the root of the project:
```javascript
npm run start-server
```

This will start the json-server reachable at `http:localhost:3000` and it will serve the REST API for the Angular
 project.

In order to start the Angular project, execute the following command:
```javascript
npm run start
```

After the command will have finished to build the project, the application will be available at the following address:
`http://localhost:4200`
