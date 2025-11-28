// mongoC.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://eriponctg_db_user:${password}@dev-cluster.y1g9ewr.mongodb.net/?appName=dev-cluster`;

const client = new MongoClient(connectionString);

let db;

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected Successfully");
    db = client.db("meanStack"); // your DB name
    return db;
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
}

await connectDB();

export default db;