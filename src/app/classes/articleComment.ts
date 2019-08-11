export interface ArticleComment {
  id: number;
  newsId: number;
  parentCommentId?: number;
  userId: number;
  content: string;
  createdDate: Date;
  upvotes: number;
}
