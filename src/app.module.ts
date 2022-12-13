import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { MailService } from './mail/mail.service';
import { PostmarkService } from './mail/postmark-mail.service';
import { SMTPMailService } from './mail/smtp-mail.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: MailService,
      useClass: PostmarkService,
    },
  ],
})
export class AppModule {}
