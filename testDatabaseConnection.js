import dotenv from 'dotenv';
import postgres from 'postgres';

// Load environment variables from .env file
dotenv.config();

// Use the environment variable for database connection
const sql = postgres(process.env.PGCONNECT, {
  ssl: { rejectUnauthorized: false }
});

async function testDatabase() {
  try {
    const result = await sql`SELECT * FROM containers LIMIT 1`;
    console.log('Test Query Result:', result);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

testDatabase();