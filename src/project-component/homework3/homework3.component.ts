import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-homework3',
  templateUrl: './homework3.component.html',
  styleUrls: ['./homework3.component.css']
})
export class Homework3Component implements OnInit {

  newPost:any = {};

  constructor(private apiService:PostService) { }

  ngOnInit(): void {
  }



  onSubmit() {
    
    this.apiService.newPostCreate(this.newPost).subscribe(
      (response) => {
        this.newPost = { title: '', body: '' };
      },
      (error) => {
        console.error('Error creating post:', error);
      }
    );

  }

}
