import postgres from 'postgres';

import dotenv from 'dotenv';
import postgres from 'postgres';

// Load environment variables from .env file
dotenv.config();

// Use the environment variable for database connection
const sql = postgres(process.env.PGCONNECT, {
  ssl: { rejectUnauthorized: false }
});

async function createTable() {
  try {
    // Create the containers table
    await sql`
      CREATE TABLE containers (
        containerNumber VARCHAR PRIMARY KEY,
        nameOfShip VARCHAR,
        containerSize FLOAT,
        dateContainerShipped DATE
      );
    `;

    console.log('Table created successfully.');

    // Insert sample data
    await sql`
      INSERT INTO containers (containerNumber, nameOfShip, containerSize, dateContainerShipped) VALUES
      ('123', 'COSCO Star', 50, '2024-01-01'),
      ('456J', 'MAERSK Rock', 25.6, '2024-03-08'),
      ('x1', 'Betty', 34, '2024-05-14');
    `;

    console.log('Sample data inserted successfully.');
  } catch (error) {
    console.error('Error executing SQL commands:', error);
  }
}

createTable();