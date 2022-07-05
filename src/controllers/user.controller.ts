import { Controller, Get, Route } from 'tsoa';
import { UserService } from '../services/user.service';
// import { UserDTO } from '../dtos/user.dto';

const userService = new UserService();

@Route('users')
export default class UserController extends Controller {

  @Get()
  public async getUsers(): Promise<void> {
    try {
      await userService.getUsers();
    } catch (error) {
      console.log(error)
    }
  }
  // @Get('{id}')
  // public async getUser(@Path() id: string): Promise<UserDTO | undefined> {
  //   try {
  //     return await new UserService().getUser(id)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // @Post()
  // async createUser(@Body() userDTO: UserDTO): Promise<UserDTO> {
  //   const user = await userService.createUser(userDTO)
  //   if (!user) throw new Error('User not found')
  //   return user;
  // }
  
  // @Put('{id}')
  
  // @Delete('{id}')
}

