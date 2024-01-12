import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/customers.model';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule,  RouterModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss',
})
export class CustomerListComponent implements OnInit{
  public customers?: Customer[];
  currentIndex = -1;
  title = '';

  constructor(private customerService: CustomerService) {}
  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.customerService.getAll().subscribe({
      next: (data) => {
        this.customers = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }


}
