import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { CreateUserController } from './create-user/create-user.controller';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        port: 587,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      },
    }),
  ], //external
  controllers: [CreateUserController],
  providers: [], //services
})
export class AppModule {}
