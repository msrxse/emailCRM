ALTER TABLE "orgs" ALTER COLUMN "created_at" SET DEFAULT '2025-07-31 12:03:42.905';--> statement-breakpoint
ALTER TABLE "orgs" ALTER COLUMN "image_url" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "orgs" ALTER COLUMN "image_url" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "orgs" ALTER COLUMN "updated_at" SET DEFAULT '2025-07-31 12:03:42.905';--> statement-breakpoint
ALTER TABLE "orgs" ALTER COLUMN "address_street2" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "orgs" ALTER COLUMN "address_street2" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "orgs_limitations" ALTER COLUMN "created_at" SET DEFAULT '2025-07-31 12:03:42.906';