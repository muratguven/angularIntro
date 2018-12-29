import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Customer } from './customers';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  encapsulation:ViewEncapsulation.Emulated

})
export class CustomerComponent implements OnInit {

  constructor(private notificationService:NotificationsService) { }
//Input parametresi kullanım örneği
  @Input() selected:string;
//Array ve ngFor örneği
  _customerList:Array<Customer>;
  ngOnInit() {
    this._customerList = [
      { id:1, NameSurName:"Murat Güven", PhoneNumber:"4335566" },
      { id:2, NameSurName:"Nisan Güven", PhoneNumber:"4335566" },
      { id:3, NameSurName:"Ebru Güven", PhoneNumber:"4335566" },
      { id:4, NameSurName:"Zeynep Ece Güven", PhoneNumber:"4335566" },
      { id:5, NameSurName:"Bedia Güven", PhoneNumber:"4335566" },
      { id:6, NameSurName:"Yurdaşen Güven", PhoneNumber:"4335566" },
      { id:7, NameSurName:"Gökhan Güven", PhoneNumber:"4335566" }
    ]
  }

  GetCustomers():Array<Customer> {
    return this._customerList;
  }

  GetNotification(userName:string){
    this.notificationService.success(userName);
  }

}
