import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {POSTS} from "../mock-posts";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = POSTS;

  constructor() { }

  ngOnInit() {
  }

  changeclass(postlike): string {
    if(postlike == 0) {
      postlike = "list-group-item-danger";
    }
    else {
      postlike = "list-group-item-sucess";
    }
    return postlike;
  }

}
