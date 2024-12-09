import  fastify  from "fastify";
import routes from "./Routes/routes.js";
import fastifyCors from "@fastify/cors";





const app = fastify();
app.register(fastifyCors, {
    origin: "http://localhost:3000",
})

app.register(routes);

app.listen(
    {
        port: 3003,
        host: "0.0.0.0",
    },
  
    
);  