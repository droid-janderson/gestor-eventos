import { User } from "@prisma/client";
import { UserDTO } from "../user.dto";

export function userMapToDTO(user: User): UserDTO {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role
  } as UserDTO;
}