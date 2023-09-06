import { Subject } from "../subjects";

export interface ProfileCreatedEvent {
  subject: Subject.ProfileCreated;
  data: {
    userId: string;
    version: number;
    email: string;
    name: string;
    address: string;
    image: string;
    isBlocked: boolean;
  };
}
