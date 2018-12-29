import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsServiceService {

  adress:string = "https://jsonplaceholder.typicode.com/";

constructor(private htpp:HttpClient) { }

// Get All Comment from the web service 
getAllComments():Observable<CommentModel[]>{
  return this.htpp.get<CommentModel[]>(this.adress+"comments");
}

}
