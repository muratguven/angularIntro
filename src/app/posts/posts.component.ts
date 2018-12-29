import { LocalservicetestService } from './../../services/localservicetest.service';
import { AlertifyService } from './../../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostsModel } from './postsmodel';
import { UsersModel } from './usersmodel';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[LocalservicetestService]
})
export class PostsComponent implements OnInit {

  adress: string = "https://jsonplaceholder.typicode.com/";
  posts: Array<PostsModel>;
  users: Array<UsersModel>;
  // filter:string;
  constructor(private localService: LocalservicetestService, 
              private activatedRoute: ActivatedRoute, 
              private alertify:AlertifyService) { }

  ngOnInit() {    
    this.getUsers();
    this.activatedRoute.params.subscribe(param => {
      this.getPosts(param["userId"]);
    });

  }

  getPosts(userid: number) {
    
    this.localService.getPosts(userid).subscribe(response=>{
      this.posts = response;
    });

  }

  getUsers() {
    this.localService.getUsers().subscribe(response=>{
      this.users = response;
    });
  }

  addFavorites(post){
    this.alertify.success(post.title)
  }

}
