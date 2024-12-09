import   sql  from "./db.js";

export class Database {
    async getuser(username, password) {
        const result = await sql`SELECT * FROM users WHERE username = ${username} AND password = ${password}`;
        return result.length ? result[0] : null;  // Retorna o primeiro usuário ou null
    }

    async createuser(username, password) {
        return await sql`INSERT INTO users (username, password) VALUES (${username}, ${password})`;
      }


    async list(search) {
        let incidentes;
    
        if (search) {
            incidentes = await sql`SELECT * FROM incidentes WHERE rede ILIKE ${'%' + search + '%'}`;
        } else {
            incidentes = await sql`SELECT * FROM incidentes`;
        }
    
        return incidentes;
    }
    async create(incidentes) {
        const {incidentId, titulo, descricao, status, rede, data_criacao} = incidentes
        
        console.log("dados recebidos")
        
       return await sql`INSERT INTO incidentes (id, titulo, descricao, status, rede, data_criacao) 
        VALUES (${incidentId}, ${titulo}, ${descricao}, ${status}, ${rede}, ${data_criacao})`

       
        
    }



    async update(id, incidentes) {
        const {titulo, descricao, status, rede} = incidentes
        const incidenteid = id
    
      
        
        await sql`UPDATE incidentes SET titulo = ${titulo}, descricao = ${descricao}, status = ${status}, rede = ${rede} WHERE id = ${incidenteid}`    
       
    }

  async  delete(id) {
        return await sql`DELETE FROM videos WHERE id = ${id}`

    }

}