import { UserDTO } from "../../dtos/user.dto";
import { User } from "@prisma/client";

export interface IUserRepository {
  getAll(): Promise<User[] | []>
  getUser(id: String): Promise<User | null>
  createUser(createUserDTO: UserDTO): Promise<User | null>
  updateUser(id: String, updateUserDTO: Partial<UserDTO>): Promise<User | null>
  deleteUser(id: String): Promise<User | null>
}