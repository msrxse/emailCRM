CREATE TABLE "orgs" (
	"created_at" timestamp DEFAULT '2025-07-29 14:31:45.093' NOT NULL,
	"id" text PRIMARY KEY NOT NULL,
	"image_url" text NOT NULL,
	"name" text NOT NULL,
	"updated_at" timestamp DEFAULT '2025-07-29 14:31:45.093' NOT NULL,
	"address_street" text NOT NULL,
	"address_street2" text NOT NULL,
	"address_city" text NOT NULL,
	"address_state" text NOT NULL,
	"address_zip" text NOT NULL,
	"address_country" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "orgs_limitations" (
	"created_at" timestamp DEFAULT '2025-07-29 14:31:45.093' NOT NULL,
	"email_count" integer NOT NULL,
	"id" text PRIMARY KEY NOT NULL,
	"org_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_orgs" (
	"is_primary" boolean DEFAULT false NOT NULL,
	"org_id" text NOT NULL,
	"user_id" text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
ALTER TABLE "orgs_limitations" ADD CONSTRAINT "orgs_limitations_org_id_orgs_id_fk" FOREIGN KEY ("org_id") REFERENCES "public"."orgs"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_orgs" ADD CONSTRAINT "user_orgs_org_id_orgs_id_fk" FOREIGN KEY ("org_id") REFERENCES "public"."orgs"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_orgs" ADD CONSTRAINT "user_orgs_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;