import { Subject } from "../subjects";

export interface ProfileUpdatedEvent {
  subject: Subject.ProfileUpdated;
  data: {
    userId: string;
    address: string;
    image: string;
  };
}
