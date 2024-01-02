import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
    },
  },
  // Path para os arquivos que contêm anotações JSDoc
  apis: ["./src/Api/Routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
