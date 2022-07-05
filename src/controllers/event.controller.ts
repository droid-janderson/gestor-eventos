import { Body, Controller, Get, Path, Post, Route } from 'tsoa';
import { EventDTO } from '../dtos/event.dto';
import { EventService } from '../services/event.service';

const eventService = new EventService();

@Route('events')
export default class EventController extends Controller {

  @Get()
  public async getEvents(): Promise<EventDTO[] | []> {
      const event = await eventService.getEvents();
      return event;
  }
  @Get('{id}')
  public async getEvent(@Path() id: string): Promise<EventDTO | null> {
    const event = await eventService.getEvent(id)
    return event;
  }
  @Post()
  async createEvent(@Body() eventDTO: EventDTO): Promise<EventDTO | null> {
    const event = await eventService.createEvent(eventDTO)
    return event;
  }
  
  // @Put('{id}')
  
  // @Delete('{id}')
}

