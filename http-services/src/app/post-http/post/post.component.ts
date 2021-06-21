import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(private post: PostService) {}
  newPost:any;
  ngOnInit (): void
  {
    this.post.getPost().subscribe((data) => {
      this.newPost = data;
    });
  }
}
