import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: process.env.PASSWORD,
  database: "boardcamp",
  connectionString: process.env.DATABASE_URL,
});

export default connection;
