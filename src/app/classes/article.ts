export interface Article {
  id: number;
  title: string;
  content: string;
  tags: string[];
  createdDate: Date;
  modifiedDate?: Date;
}
