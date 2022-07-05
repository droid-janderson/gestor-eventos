import { PrismaClient, User } from "@prisma/client";
import { UserDTO } from "../dtos/user.dto";
import { IUserRepository } from "./interfaces/user.repository.interface";

const prisma = new PrismaClient();

export class UserPrismaRepository implements IUserRepository {
  async getAll(): Promise<User[] | []> {
    const users = await prisma.user.findMany();
    return users;
  }
  async getUser (id: String): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: { id: String(id) },
    });
    return user;
  }
  async createUser(createUserDTO: UserDTO): Promise<User | null> {
    const user = await prisma.user.create({
      data: {
        ...createUserDTO
      },
    });

    return user;
  }
  async updateUser(
    id: String,
    updateUserDTO: Partial<UserDTO>
  ): Promise<User | null> {
    const user = await prisma.user.update({
      where: { id: String(id) },
      data: {
        ...updateUserDTO,
      },
    });
    return user;
  }
  async deleteUser(id: String): Promise<User | null> {
    const user = await prisma.user.delete({
      where: { id: String(id) },
    });
    return user;
  }
}
