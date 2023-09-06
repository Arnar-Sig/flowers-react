import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE IF NOT EXISTS FlowerImages ( 
      id SERIAL PRIMARY KEY,
      name VARCHAR (255), 
      fileName VARCHAR (255),
      dateadded TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      type VARCHAR (255),
      description TEXT
      );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

/* EXAMPLE INSERT 
INSERT INTO FlowerImages (name, fileName, type, description)
VALUES ('Rose', 'rose.jpg', 'Image', 'A beautiful red rose');

INSERT INTO flowerImages (name, fileName, type, description)
VALUES ('Rhododendron Hymenanthes', '01-05-2006_07-36-29_03.jpg', 'Rhododendron', 'A demo image of a Rhododendron plant.');
*/
