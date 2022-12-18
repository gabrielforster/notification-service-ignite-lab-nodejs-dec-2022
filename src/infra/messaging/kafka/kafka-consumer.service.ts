import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['integral-earwig-14441-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'aW50ZWdyYWwtZWFyd2lnLTE0NDQxJAVb1UAbIGFFpJKRI-XbFqDC-WGttcTWO-Y',
          password:
            'dbtFmD6Z0K2dWDU8ggmvK1_ENOaCsXOh8OspDAvqy0RFy6k1m_MN_Ptz5Wlzwr2kgTw-rg==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
