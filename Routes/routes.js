import { CreateIncident, GetIncidents, Updateincident, Deleteincident } from "../controller/controller.js";




export default function (fastify, opts) {
    const server = fastify;
    server.get(`/incidentes`, GetIncidents); 
    server.post(`/incidentes/`, CreateIncident);
    server.put(`/incidentes/:id`, Updateincident);
    server.delete(`/incidentes/:id`, Deleteincident);
}