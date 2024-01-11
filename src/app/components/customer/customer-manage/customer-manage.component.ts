import { Component } from '@angular/core';
import { FormControl, FormGroup , ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-manage',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './customer-manage.component.html',
  styleUrl: './customer-manage.component.scss'
})
export class CustomerManageComponent {

  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  
}
