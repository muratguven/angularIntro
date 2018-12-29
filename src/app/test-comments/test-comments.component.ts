import { PagerModel } from './../../services/models/pagerModel';

import { CommentsServiceService } from './services/commentsService.service';
import { Component, OnInit } from '@angular/core';
import { CommentModel } from './models/comment.model';

@Component({
  selector: 'app-test-comments',
  templateUrl: './test-comments.component.html',
  styleUrls: ['./test-comments.component.css'],
  providers:[CommentsServiceService]
})
export class TestCommentsComponent implements OnInit {

  constructor(private commentService:CommentsServiceService) { }
  comments:CommentModel[];
  pager:PagerModel=new PagerModel();
  ngOnInit() {
    this.getAllComments();
    
  }

getAllComments(){
 
  this.commentService.getAllComments().subscribe(response=>{
    this.comments = response;
    this.pager = this.getPager(response.length);
  });
  
}
getPager(totalItems:number, currentPage:number=1, pageSize:number=3):PagerModel{
  
  // Bu method ile toplam sayfa sayısını bulabiliriz. 
  //Ör: 101 adet item var page size 10,1 böldüğümüzde küsürlü bir rakam çıkar.
  // Ceil methodu bunu yukarı yuvarlar ve 11 sayfa olarak çıkar. :D  
  let totalPages = Math.ceil(totalItems/pageSize); 

  // Bu dizi pager da gösterilecek sayfa sayısını tutan dizi 
  //1|2|3| gibi
  let pages:Array<number> = []
  for (let index = 1; index < totalPages; index++) {
    pages.push(index);
  }
  var pagerModel = new PagerModel();
  pagerModel.pageSize=pageSize;
  pagerModel.currentPage = currentPage;
  pagerModel.pageList = pages;

  return pagerModel;
}
setPage(page:number){
 
  this.pager.currentPage = page;
}

}
