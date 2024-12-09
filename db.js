import dotenv from "dotenv";
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default sql;