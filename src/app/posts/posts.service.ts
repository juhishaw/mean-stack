import { Injectable } from "@angular/core";
import { IPosts } from "../interface/posts.interface";

@Injectable({providedIn: 'root'})
export class PostsService {
   private posts: IPosts[] = [];

   getPosts() {
    return this.posts;
   }

   addPost(title: string, content: string) {
    const newPost: IPosts = {title, content};
    this.posts.push(newPost)
   }

}