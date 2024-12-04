import sql from "./db.js";

 {
    await sql`
    CREATE TABLE incidentes (
        id SERIAL PRIMARY KEY,
        titulo text NOT NULL,
        descricao text NOT NULL,
        status text NOT NULL,
        rede text NOT NULL,
        data_criacao TIMESTAMP NOT NULL
    )
    `
}