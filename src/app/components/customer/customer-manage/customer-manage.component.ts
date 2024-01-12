import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/customers.model';

@Component({
  selector: 'app-customer-manage',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './customer-manage.component.html',
  styleUrl: './customer-manage.component.scss'
})
export class CustomerManageComponent implements OnInit {

  public isUpdate: boolean = false;
  public btnTitle: string='';
  private customer:Customer ={
    firstName: '',
    lastName: '',
    email: ''
  };


  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private customerService: CustomerService){
    
  }

  ngOnInit(): void {

    this.isUpdate? this.btnTitle='Update': this.btnTitle="Add";


  }

onSubmit(){
  
  if(this.isUpdate){

  }
  else{  //if Add
    this.customer.firstName = this.customerForm.controls.firstName.value!;
    this.customer.lastName = this.customerForm.controls.lastName.value!;
    this.customer.email = this.customerForm.controls.email.value!;

    this.saveCustomer(this.customer);

  }
}

private   saveCustomer(customer: Customer): void {
  this.customerService.create(customer).subscribe({
    next: (data) => {
      console.log(data);
    },
    error: (e) => console.error(e)
  });
}




}
