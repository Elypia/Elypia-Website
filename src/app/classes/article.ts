export interface Article {
  id: number;
  title: string;
  content: string;
  tags: string[];
  createdDate: Date;
  modifiedDate?: Date;
}

export interface ArticleComment {
  id: number;
  newsId: number;
  parentCommentId?: number;
  userId: number;
  content: string;
  createdDate: Date;
  upvotes: number;
}
