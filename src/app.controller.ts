import { randomUUID } from 'node:crypto';
import { Controller, Get, Post } from '@nestjs/common';

import { MailService } from './mail/mail.service';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'New friend solicitation',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
