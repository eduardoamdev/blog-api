import { Client, ClientConfig } from "pg";

const dbConfig: ClientConfig = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || ""),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export const dbClient: any = new Client(dbConfig);

export async function connectToDB() {
  try {
    if (!dbClient._connected) {
      await dbClient.connect();

      console.log("Connected to database");
    }
  } catch (error: any) {
    console.log(
      `There is the following database connection error: ${error.message}`
    );
  }
}
