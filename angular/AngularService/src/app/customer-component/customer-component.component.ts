import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/customer-service.service';
import {Customer} from './model/Customer';
import {CustomerService} from './service/customer.service';
@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent implements OnInit {

  listCustomer: Array<Customer>;
  constructor(private customerService: CustomerService ) { }

  ngOnInit() {
    this.customerService.getAllCustomer().subscribe(data => {this.listCustomer = data;
    });
  }
  createCutomer() {
    this.customerService.createCustomer(new Customer(9, 'tung', 'Tan')).subscribe();
  }
}
