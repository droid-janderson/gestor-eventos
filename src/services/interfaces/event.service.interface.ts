import { EventDTO } from "../../dtos/event.dto";

export interface IEventService {
  getEvents(): Promise<EventDTO[] | []>
  getEvent(id: String): Promise<EventDTO | null>
  createEvent(createEventDTO: EventDTO): Promise<EventDTO | null>
  updateEvent(id: String, updateEventDTO: Partial<EventDTO>): Promise<EventDTO |null>
  deleteEvent(id: String): Promise<EventDTO | null>
}