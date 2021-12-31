import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { ICreateUserDTO } from '../create-user/create-user-dto';

/* What this Service does... */
@Injectable()
class sendMailProducerService {
  constructor(@InjectQueue('sendMail-queue') private queue: Queue) {}

  async sendMail(createUserDTO: ICreateUserDTO) {
    await this.queue.add('sendMail-job', createUserDTO, { delay: 5000 });
  }
}

export { sendMailProducerService };
