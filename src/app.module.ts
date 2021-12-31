import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { CreateUserController } from './create-user/create-user.controller';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { sendMailProducerService } from './jobs/send-mail-producer';
import { sendMailConsumer } from './jobs/send-mail-consumer';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
    }),
    BullModule.registerQueue({
      name: 'sendMail-queue',
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      },
    }),
  ], //external
  controllers: [CreateUserController],
  providers: [sendMailProducerService, sendMailConsumer], //services
})
export class AppModule {}
