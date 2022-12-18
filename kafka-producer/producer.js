const Kafka = require("kafkajs").Kafka
const randomUUID = require("crypto").randomUUID

async function bootstrap(){
	const kafka = new Kafka({
  		brokers: ['integral-earwig-14441-us1-kafka.upstash.io:9092'],
 	 	sasl: {
   		mechanism: 'scram-sha-256',
    		username: 'aW50ZWdyYWwtZWFyd2lnLTE0NDQxJAVb1UAbIGFFpJKRI-XbFqDC-WGttcTWO-Y',
   	 	password: 'dbtFmD6Z0K2dWDU8ggmvK1_ENOaCsXOh8OspDAvqy0RFy6k1m_MN_Ptz5Wlzwr2kgTw-rg==',
  	},
  		ssl: true,
	})

	const producer = kafka.producer()

	await producer.connect()

	await producer.send({
		topic: 'notifications.send-notification',
		messages: [
			{
				value: JSON.stringify({
					content: 'New friend request',
					category: 'social',
					recipientId: randomUUID(),
				})
			}
		]
	})

	await producer.disconnect()
}

bootstrap()
