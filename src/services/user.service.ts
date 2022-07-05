import { userMapToDTO } from "../dtos/mappers/user.mapper";
import { UserDTO } from "../dtos/user.dto";
import { UserPrismaRepository } from "../repositories/userPrisma.repository";
import { IUserService } from "./interfaces/user.service.interface";
 
const userRepository = new UserPrismaRepository();

export class UserService implements IUserService{
 async getUsers(): Promise<UserDTO[] | []> {
  const users = await userRepository.getAll();
  return users.map((user)=> userMapToDTO(user));
 }

 async getUser(id: String): Promise<UserDTO | null> {
  const user = await userRepository.getUser(id);
  if (!user) throw new Error('User not found')
  return userMapToDTO(user);
 }

  async createUser(createUserDTO: UserDTO) {
    const user = await userRepository.createUser(createUserDTO)
    if (!user) throw new Error('User not found')
    return userMapToDTO(user);
  }

  async updateUser(id: String, updateUserDTO: Partial<UserDTO>):Promise<UserDTO |null> {
    const user = await userRepository.updateUser(id, updateUserDTO);
    if (!user) throw new Error('User not found')
    return userMapToDTO(user);
  }
  async deleteUser(id: String): Promise<UserDTO |null>{
    const user = await userRepository.deleteUser(id)
    if (!user) throw new Error('User not found')
    return userMapToDTO(user);
  }
}
