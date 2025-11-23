import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/generated/client";

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({ connectionString });

export const db = globalThis.db || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalThis.db = db;
}
