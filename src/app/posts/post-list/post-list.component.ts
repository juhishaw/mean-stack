import { Component, OnInit } from '@angular/core';
import { IPosts } from 'src/app/interface/posts.interface';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public posts:IPosts[] = []

  constructor(private postsService: PostsService) {}

  ngOnInit(): void { 
    this.posts = this.postsService.getPosts();
  }
}
