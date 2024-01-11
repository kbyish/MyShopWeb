import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/customers.model';


@Component({
  selector: 'app-customer-list',
  standalone: true,
  //imports: [ReactiveFormsModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss',
})
export class CustomerListComponent implements OnInit{
  tutorials?: Customer[];
  currentIndex = -1;
  title = '';

  constructor(private customerService: CustomerService) {}
  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    console.log('retrieveTutorials(): start');
    this.customerService.getAll().subscribe({
      next: (data) => {
        this.tutorials = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }


}
