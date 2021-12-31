import { Body, Controller, Post } from '@nestjs/common';
import { sendMailProducerService } from 'src/jobs/send-mail-producer';
import { ICreateUserDTO } from './create-user-dto';

@Controller('create-user') //route name
export class CreateUserController {
  constructor(private readonly sendMailService: sendMailProducerService) {}

  @Post('/')
  async createUser(@Body() createUser: ICreateUserDTO) {
    await this.sendMailService.sendMail(createUser);

    return { message: createUser };
  }
}
