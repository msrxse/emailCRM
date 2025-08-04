import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

import { users } from "./auth-schema";

export const Orgs = pgTable("orgs", {
  createdAt: timestamp("created_at").default(new Date()).notNull(),
  id: text("id").notNull().primaryKey(),
  imageUrl: text("image_url").default(""),
  name: text("name").notNull(),
  updatedAt: timestamp("updated_at").default(new Date()).notNull(),
  addressStreet: text("address_street").notNull(),
  addressStreet2: text("address_street2").default(""),
  addressCity: text("address_city").notNull(),
  addressState: text("address_state").notNull(),
  addressZip: text("address_zip").notNull(),
  addressCountry: text("address_country").notNull(),
});

export const insertOrgsSchema = createInsertSchema(Orgs);

export const OrgsLimitations = pgTable("orgs_limitations", {
  createdAt: timestamp("created_at").default(new Date()).notNull(),
  emailCount: integer("email_count").notNull(),
  id: text("id").notNull().primaryKey(),
  orgId: text("org_id")
    .notNull()
    .references(() => Orgs.id, { onDelete: "cascade" }),
});

export const UserOrgs = pgTable("user_orgs", {
  isPrimary: boolean("is_primary").default(false).notNull(),
  orgId: text("org_id")
    .notNull()
    .references(() => Orgs.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
});

export const insertUserOrgsSchema = createInsertSchema(UserOrgs);
