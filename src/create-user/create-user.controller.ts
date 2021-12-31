import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Post } from '@nestjs/common';
import { ICreateUserDto } from './create-user-dto';

@Controller('create-user') //route name
export class CreateUserController {
  constructor(private mailService: MailerService) {}

  @Post('/')
  async createUser(@Body() createUser: ICreateUserDto) {
    await this.mailService.sendMail({
      to: createUser.email,
      from: 'Wellington ',
      subject: 'Welcome',
      text: `Hello ${createUser.name}! Your account has been created`,
    });

    return { message: createUser };
  }
}
