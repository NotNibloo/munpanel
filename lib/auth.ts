import { betterAuth } from 'better-auth';
import Database from 'better-sqlite3';
import { jwt } from "better-auth/plugins"

const db = new Database('./data/auth.db');

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_URL!,
  database: db,
  emailAndPassword: {
    enabled: true,
  },
   plugins: [ 
      jwt(), 
  ]
});
