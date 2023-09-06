import { Subject } from "../subjects";

export interface UserBlockEvent {
  subject: Subject.UseBlock;
  data: {
    userId: string;
    isBlocked: boolean;
  };
}
