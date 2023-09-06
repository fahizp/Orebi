

import { Subject } from "../subjects";

export interface ProductDeletedEvent {
    subject: Subject.ProductDeleted;
    data: {
        id: string;
    };
}
