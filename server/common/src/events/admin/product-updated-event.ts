import { Subject } from "../subjects";

export interface ProductUpdatedEvent {
  subject: Subject.ProductUpdated;
  data: {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    stock: number;
  };
}
