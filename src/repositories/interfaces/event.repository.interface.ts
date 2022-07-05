import { EventDTO } from "../../dtos/event.dto";
import { Event } from "@prisma/client";

export interface IEventRepository {
  getAll(): Promise<Event[] | []>
  getEvent(id: String): Promise<Event | null>
  createEvent(createEventDTO: EventDTO): Promise<Event | null>
  updateEvent(id: String, updateEventDTO: Partial<EventDTO>): Promise<Event | null>
  deleteEvent(id: String): Promise<Event | null>
}