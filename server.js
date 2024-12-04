import  fastify  from "fastify";
import routes from "./Routes/routes.js";

const app = fastify();

app.register(routes);

app.listen(
    {
        port: 3000,
        host: "0.0.0.0",
    },
  
    
);  