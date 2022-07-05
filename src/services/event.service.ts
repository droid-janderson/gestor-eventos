import { EventDTO } from "../dtos/event.dto";
import { EventPrismaRepository } from "../repositories/eventPrisma.repository";
import { IEventService } from "./interfaces/event.service.interface";

const eventRepository = new EventPrismaRepository();

export class EventService implements IEventService {
  async getEvents(): Promise<[] | EventDTO[]> {
    const events = await eventRepository.getAll();
    if (!events) throw new Error("User not found");
    return events;
  }
  async getEvent(id: String): Promise<EventDTO | null> {
    const event = await eventRepository.getEvent(id);
    if (!event) throw new Error("User not found");
    return events;
  }
  async createEvent(createEventDTO: EventDTO): Promise<EventDTO | null> {
    const event = await eventRepository.createEvent(createEventDTO);
    if (!event) throw new Error("User not found");
    return event;
  }
  async updateEvent(
    id: String,
    updateEventDTO: Partial<EventDTO>
  ): Promise<EventDTO | null> {
    const event = await eventRepository.updateEvent(id, updateEventDTO);
    if (!event) throw new Error("User not found");
    return event;
  }
  async deleteEvent(id: String): Promise<EventDTO | null> {
    const event = await eventRepository.deleteEvent(id);
    if (!event) throw new Error("User not found");
    return event;
  }
}
