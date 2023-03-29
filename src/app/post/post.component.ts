import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {

  @Input() postImg = 'https://picsum.photos/id/237/500/500';
}
