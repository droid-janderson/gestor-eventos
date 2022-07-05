import { Categories } from "../enum/categories";

export interface EventDTO {
  id?: String;
  name?: String;
  category?: Categories;
  description?: string;
  tickets?: Number;
  author?: String;
  eventDate?: Date;
}