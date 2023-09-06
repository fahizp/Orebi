import { Message, Stan, SubscriptionOptions } from "node-nats-streaming";

interface EventData {
  subject: string;
  data: any;
}

abstract class Listener<T extends EventData> {
  abstract subject: T["subject"];
  abstract queueGroupName: string;
  protected ackWait = 5 * 1000;
  private client: Stan;

  constructor(client: Stan) {
    this.client = client;
  }

  abstract onMessage(data: T["data"], msg: Message): void;

  subscriptionOptions(): SubscriptionOptions {
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(this.ackWait)
      .setDurableName(this.queueGroupName);
  }

  listen(): void {
    const subscription = this.client.subscribe(
      this.subject,
      this.queueGroupName,
      this.subscriptionOptions()
    );

    subscription.on("message", (msg: Message) => {
      console.log(`Message received: ${this.subject} / ${this.queueGroupName}`);
      const parsedData = this.parseMessage(msg);
      this.onMessage(parsedData, msg);
    });
  }

  parseMessage(msg: Message): T["data"] {
    const data = msg.getData();
    return typeof data === "string" ? JSON.parse(data) : JSON.parse(data.toString("utf8"));
  }
}

export { Listener };
