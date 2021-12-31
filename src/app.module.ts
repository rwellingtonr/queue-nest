import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { CreateUserController } from './create-user/create-user.controller';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';

const {
  REDIS_HOST,
  REDIS_PORT,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
} = process.env;

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: REDIS_HOST,
        port: Number(REDIS_PORT),
      },
    }),
    MailerModule.forRoot({
      transport: {
        host: EMAIL_HOST,
        port: Number(EMAIL_PORT),
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
      },
    }),
  ], //external
  controllers: [CreateUserController],
  providers: [], //services
})
export class AppModule {}
