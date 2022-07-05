import { Roles } from "../enum/roles";

export interface UserDTO {
  id?: string;
  email?: string;
  password?: string;
  name?: string;
  role?: Roles;
}