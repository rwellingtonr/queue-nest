import { Module } from '@nestjs/common';

import { CreateUserController } from './create-user/create-user.controller';

@Module({
  imports: [], //external
  controllers: [CreateUserController],
  providers: [], //services
})
export class AppModule {}
