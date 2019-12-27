import { Component, OnInit, Input } from '@angular/core';
import { Post} from "../post";

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() {}

  ngOnInit() {
  }

  AddLike(): void {
    let a = document.getElementById(this.post.title);
    console.log(a);
    a.className = "list-group-item-success";
  }

  AddDislike(): void {
    let a = document.getElementById(this.post.title);
    console.log(a);
    a.className = "list-group-item-danger";
  }
}
