import { PrismaClient, Event } from "@prisma/client";
import { EventDTO } from "../dtos/event.dto";
import { IEventRepository } from "./interfaces/event.repository.interface";

const prisma = new PrismaClient();

export class EventPrismaRepository implements IEventRepository {
  async getAll(): Promise<Event[] | []> {
    const events = await prisma.event.findMany();
    return events;
  }
  async getEvent(id: String): Promise<Event | null> {
    const event = await prisma.event.findFirst({
      where: { id: String(id) },
    });
    return event;
  }
  async createEvent(createEventDTO: EventDTO): Promise<Event | null> {
    const event = await prisma.event.create({
      data: {
        ...createEventDTO,
      },
    });

    return event;
  }
  async updateEvent(
    id: String,
    updateEventDTO: Partial<EventDTO>
  ): Promise<Event | null> {
    const event = await prisma.event.update({
      where: { id: String(id) },
      data: {
        ...updateEventDTO,
      },
    });
    return event;
  }
  async deleteEvent(id: String): Promise<Event | null> {
    const event = await prisma.event.delete({
      where: { id: String(id) },
    });
    return event;
  }
}
