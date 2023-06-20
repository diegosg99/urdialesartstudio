import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  items!: Array<any>;

  constructor(private paymentService:PaymentService) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
