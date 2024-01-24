import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { FoodieService } from '../service/foodie.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
 
  selectedPaymentMethod: string = 'creditCard';
  creditCardDetails: any = {}; // Model for credit card details
  phonepayDetails: any = {}; // Model for Phonepay details

  constructor(private snackBar: MatSnackBar,private route:Router, private login:LoginService, private foodie:FoodieService) {}

  processPayment() {
    switch (this.selectedPaymentMethod) {
      case 'creditCard':
        if (this.isValidCreditCard()) {
          this.processCreditCardPayment();
        } else {
          this.showValidationSnackbar('Please fill out all required fields correctly.');
        }
        break;
      case 'phonepay':
        if (this.isValidPhonepay()) {
          this.processPhonepayPayment();
        } else {
          this.showValidationSnackbar('Please fill out all required fields correctly.');
        }
        break;
      case 'cashOnDelivery':
        this.processCashOnDelivery();
        break;
      // Add other cases for additional payment methods
      default:
        console.log('Invalid payment method');
        break;
    }
  }

  processCreditCardPayment() {
    // Implement credit card payment logic
    console.log('Processing credit card payment', this.creditCardDetails);
    // Add logic to submit credit card details to a payment gateway
    this.showSuccessSnackbar('Credit card payment successful');
  }

  processPhonepayPayment() {
    // Implement Phonepay payment logic
    console.log('Processing Phonepay payment', this.phonepayDetails);
    // Add logic to submit Phonepay details to a payment gateway
    this.showSuccessSnackbar('Phonepay payment successful');
  }

  processCashOnDelivery() {
    // Implement cash on delivery payment logic
    console.log('Processing cash on delivery payment');
  }

  // Add methods for other payment options if needed

  private isValidCreditCard(): boolean {
    // Implement credit card validation logic
    return !!this.creditCardDetails.cardNumber && !!this.creditCardDetails.expirationDate && !!this.creditCardDetails.cvv;
  }

  private isValidPhonepay(): boolean {
    // Implement Phonepay validation logic
    return !!this.phonepayDetails.upiId;
  }
  private iscashOnDelivery(): boolean {
    // Implement Phonepay validation logic
    return !!this.phonepayDetails.upiId;
  }

  private showSuccessSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
    this.route.navigateByUrl("");
  }

  private showValidationSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['error-snackbar'],
    });
  }
}


