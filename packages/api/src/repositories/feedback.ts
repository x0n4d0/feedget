export type FeedbackCreate = {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbackRepository {
  create: (data: FeedbackCreate) => Promise<void>;
}
