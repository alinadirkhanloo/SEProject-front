import { Category } from './category.model';
import { Comment } from './comment.model';

export class Post {
  title: string;
  text: string;
  categoryId: string;
  shortDescription: string;
  timeToRead: string;
  image: string;
}
