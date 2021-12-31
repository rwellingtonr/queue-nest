import { Controller, Get } from '@nestjs/common';

@Controller('create-user') //route name
export class CreateUserController {
  @Get('/')
  creteUser() {
    return 'ok';
  }
}
