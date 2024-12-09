import { Database } from "../banco-postgresSql.js";
import { randomUUID } from "crypto";

const database = new Database();   

export async function createuser(req, res) {
    const { username, password } = req.body;
    await database.createuser(username, password);
    res.send({ message: "Usuário criado com sucesso." });
}

export async function Login(req, res) {
    const { username, password } = req.body;
    console.log("Consulta na API")
    console.log(username, password)

    const user = await database.getuser(username, password);
   
    if (user && user.password === password) {  // Verifique se o usuário foi encontrado e a senha está correta
        res.status(200).send({ message: "Login bem-sucedido!" });
    } else {
        res.status(401).send({ message: "Usuário ou senha incorretos." });
    }
}
