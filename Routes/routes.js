import { CreateIncident, GetIncidents, Updateincident, Deleteincident } from "../controller/controller.js";
import { createuser, Login } from "../controller/auth.controller.js";



export default function (fastify, opts) {
    const server = fastify;
    server.get(`/incidentes`, GetIncidents); 
    server.post(`/incidentes`, CreateIncident);
    server.put(`/incidentes/:id`, Updateincident);
    server.delete(`/incidentes/:id`, Deleteincident);
    server.post(`/login`,createuser);
    server.post(`/api`, Login);
}