import { TestCommentsComponent } from './test-comments/test-comments.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CustomerComponent } from 'src/customer/customer.component';

const routes: Routes = [
  {path:"posts", component:PostsComponent},
  {path:"", redirectTo:"posts", pathMatch:"full"},
  {path:"customer", component:CustomerComponent},
  {path:"product", component:ProductComponent},
  {path:"posts/:userId", component:PostsComponent},
  {path:"comments", component:TestCommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
