import { Category } from './category.model';
import { Comment } from './comment.model';

export class Post {
  title: string;
  description: string;
  categoryName: string;
  authorFullName: string;
  summery: string;
  view: number;
  rank: number;
  id: number;
  time: string;
  childCategories: Category[];
  comments: Comment[];
}
