import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPosts } from 'src/app/interface/posts.interface';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  
  public posts = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}

  public createPost(postForm: NgForm) {
    this.postsService.addPost(postForm.value.title, postForm.value.content)
  }
}
