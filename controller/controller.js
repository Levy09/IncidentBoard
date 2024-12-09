import { Database } from "../banco-postgresSql.js";
import {randomUUID} from "crypto";

const database = new Database();



export async function CreateIncident(req, res) {

    const incidentId = randomUUID();
    
    const {titulo, descricao, status, rede} = req.body;
    
    
    database.create({incidentId, titulo, descricao, status, rede, data_criacao: new Date()});

    res.status(201).send({message: "CreateIncident"});
    
}

export async function GetIncidents(req, res) {
    const {search} = req.query;
    const incidents = await database.list(search);
    res.send(incidents);
    

}

export async function Updateincident(req, res) {
    const incidentes = req.body;
    
    const incidenteid  = req.params.id
    console.log(incidenteid)
    
    
     await database.update(incidenteid, incidentes);
    
    res.send("Updateincident");
    
}   

export async function Deleteincident(req, res) {
    const incidenteid = req.params.id;
    await database.delete(incidenteid);
    res.send("Deleteincident");     
}