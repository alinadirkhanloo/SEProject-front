import { Post } from './post.model';
import { Employe } from './employe.model';
import { Favorite } from './favorites.model';
import { Follower } from './follower.model';
import { Comment } from '../model/comment.model';

export interface User {
  fullName: string;
  birthday: string;
  gender: number;
  id: number;
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  posts: Post[],
  comments: Comment[],
  employs: Employe[],
  favorites: Favorite[],
  followers: Follower[],
  token?: string;
}
