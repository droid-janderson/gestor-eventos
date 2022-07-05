import { Body, Controller, Get, Path, Post, Route } from 'tsoa';
import { UserDTO } from '../dtos/user.dto';
import { UserService } from '../services/user.service';

const userService = new UserService();

@Route('users')
export default class UserController extends Controller {

  @Get()
  public async getUsers(): Promise<UserDTO[] | []> {
      const user = await userService.getUsers();
      return user;
  }
  @Get('{id}')
  public async getUser(@Path() id: string): Promise<UserDTO | null> {
    const user = await userService.getUser(id)

    return user;
  }
  @Post()
  async createUser(@Body() userDTO: UserDTO): Promise<UserDTO> {
    const user = await userService.createUser(userDTO)
    return user;
  }
  
  // @Put('{id}')
  
  // @Delete('{id}')
}

