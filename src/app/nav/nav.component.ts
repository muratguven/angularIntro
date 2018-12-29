import { MenuItems } from './../navbar/menuItems';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
rootMenuItems:MenuItems[];
dropDownMenuItems:MenuItems[];
  constructor() { }
@Input() menuData: MenuItems[];
  ngOnInit() {
    this.GetRootMenus();
  }

  GetRootMenus(){
    
    let rootList:Array<MenuItems>= new Array<MenuItems>();
    let dropdownList:Array<MenuItems>= new Array<MenuItems>();
    this.menuData.filter(c=>!c.ParentId).forEach(element => {
      
      if(this.menuData.filter(s=>s.ParentId===element.Id).length>0){
        dropdownList.push(element);
      }else{
        rootList.push(element);
      }
    });
     this.rootMenuItems = rootList;
     this.dropDownMenuItems = dropdownList;
  }

  GetDropMenus(rootItem:MenuItems){
    var subMenus = this.menuData.filter(f=>f.ParentId==rootItem.Id);
    this.dropDownMenuItems =subMenus;
  }
}
