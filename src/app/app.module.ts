
import { FilterTitlePipe } from './pipes/filterTitle.pipe';
import { AlertifyService } from './../services/alertify.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from 'src/customer/customer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ProductComponent } from './product/product.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NavComponent } from './nav/nav.component';
import { TestCommentsComponent } from './test-comments/test-comments.component';
import { ProductCategoryComponent } from './productCategory/productCategory.component';
import { CaseCategoryComponent } from './caseCategory/caseCategory.component';
@NgModule({
   declarations: [
      AppComponent,
      CustomerComponent,
      NavbarComponent,
      PostsComponent,
      FilterTitlePipe,
      LoginComponent,
      ProductComponent,
      NavComponent,
      TestCommentsComponent,
      ProductCategoryComponent,
      CaseCategoryComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule,
      SimpleNotificationsModule.forRoot(),
      Ng2SmartTableModule
   ],
   providers: [
      AlertifyService,
      NotificationsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
