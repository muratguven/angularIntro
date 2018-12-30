import { MenuItems } from './menuItems';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mainMenu: MenuItems[];
  constructor() { }

  ngOnInit() {
    this.mainMenu = this.GetMenu();
  }
  // Move to Service layer
GetMenu(): MenuItems[]{

    let result: Array<MenuItems> = new Array<MenuItems>();
    result.push(new MenuItems().SetMenu(1,undefined,"productPage","Products","product",""));
    result.push(new MenuItems().SetMenu(2,undefined,"customerPage","Customers","customer",""));
    result.push(new MenuItems().SetMenu(3,2,"customerPage","Customers-Sub","customer",""));
    result.push(new MenuItems().SetMenu(4,undefined,"postsPage","Posts","posts",""));
    result.push(new MenuItems().SetMenu(5,undefined,"commentsPage","Comment","comments",""));
    result.push(new MenuItems().SetMenu(5,undefined,"categoryCreatePage","Product Category","productCategory",""));
    return result;
  }
}
