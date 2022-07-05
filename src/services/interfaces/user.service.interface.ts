import { UserDTO } from "../../dtos/user.dto";

export interface IUserService {
  getUsers(): Promise<UserDTO[] | []>
  getUser(id: String): Promise<UserDTO | null>
  createUser(createUserDTO: UserDTO): Promise<UserDTO | null>
  updateUser(id: String, updateUserDTO: Partial<UserDTO>): Promise<UserDTO |null>
  deleteUser(id: String): Promise<UserDTO | null>
}