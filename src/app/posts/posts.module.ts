import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostsRoutingModule } from './posts-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    PostCreateComponent, 
    PostListComponent, PostDashboardComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  providers: [PostsService]
})
export class PostsModule { }
