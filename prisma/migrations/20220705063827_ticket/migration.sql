-- CreateTable
CREATE TABLE "Ticket" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "idEvent" UUID NOT NULL,
    "idUser" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_idEvent_fkey" FOREIGN KEY ("idEvent") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
