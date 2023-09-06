import { Subject } from "../subjects";

export interface UserRegisteredEvent {
  subject: Subject.UserRegistered;
  data: {
    userId: string;
    version: number;
    email: string;
    name: string;
  };
}
