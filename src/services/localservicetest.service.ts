import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsModel } from 'src/app/posts/postsmodel';
import { UsersModel } from 'src/app/posts/usersmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalservicetestService {

  adress: string = "https://jsonplaceholder.typicode.com/";

constructor(private http: HttpClient) { }

getPosts(userid: number) :Observable<Array<PostsModel>>{
  
  if (userid) {

    return this.http.get<Array<PostsModel>>(this.adress + "posts?userId="+userid);
  } else {
    return this.http.get<Array<PostsModel>>(this.adress + "posts");
  }
  
}

getUsers() :Observable<Array<UsersModel>>{

  
  return this.http.get<Array<UsersModel>>(this.adress + "users");
  
}

}
