import { Subject } from "../subjects";

export interface ProductCreatedEvent {
  subject: Subject.ProductCreated;
  data: {
    title: string;
    description: string;
    stock: number;
    price: number;
    image: string;
    id: string;
  };
}
