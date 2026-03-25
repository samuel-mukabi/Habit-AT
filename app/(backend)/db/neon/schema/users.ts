import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar('name').notNull(),
    age: integer('age').notNull(),
    email: varchar('email').notNull().unique(),
});
