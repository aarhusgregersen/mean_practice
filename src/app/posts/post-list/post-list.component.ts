import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService} from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First  post', content: 'This is the first post\'s content'},
  //   {title: 'Second  post', content: 'This is the second post\'s content'},
  //   {title: 'Third  post', content: 'This is the third post\'s content'}
  // ];
  posts: Post[] = [];
  private postsSubscription: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSubscription = this.postsService.getPostsUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  // This will remove the subscription when the component is no longer part of the UI, removing potential memory leaks
  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
