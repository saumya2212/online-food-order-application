import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from '../service/restaurant-service.service';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Order } from '../model/order';
import { Item } from '../model/item';
import { FoodieService } from '../service/foodie.service';
import { UserService } from '../service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Restaurant } from '../model/restaurant';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit{
  constructor(private restaurant:RestaurantServiceService,
              private route:Router,
              private login:LoginService,
              private foodie:FoodieService,
              private userService:UserService,
              private _sanckBar:MatSnackBar){}
  addtocart!:Order;
  itemId!:boolean;
  data:number | undefined;
  restaurantItems:any=[];
  cartItems:any=[];
  favItems:any=[];
  isLoading:boolean=false;
  restaurants?: Restaurant;
  
  restaurantId!: number;
  ngOnInit(): void {
    this.login.findCartCount()
    this.data = 51;
    this.restaurantId = this.restaurant.id;
    this.restaurant.getRestaurantById(+this.restaurantId).subscribe((data:any)=>{
      this.restaurants=data;
      console.log(data);
      
    });
   
    
  //   this.login.findCartCount();
  // this.data = 51;
  // this.restaurantId = this.restaurant.id;

  if (this.login.isLoggedIn) {
    const cartItems = this.initializeCartItems();

    Promise.all([cartItems]).then(() => {
      this.restaurant.getAllItems(+this.restaurantId).subscribe((data: any) => {
        
        this.restaurantItems = data.map((item: any) => {
          const cartItem = this.cartItems?.find((cartitem: any) => cartitem.itemName === item.itemName);
          const inCart = cartItem ? true : false;
          const count = cartItem ? cartItem.count : 0;
          return { item, inCart, count };
        });
      });
    }).catch((error) => {
      console.error("Error retrieving cartItems:", error);
    });
  } else {
    this.restaurant.getAllItems(+this.restaurantId).subscribe((data: any) => {
      this.restaurantItems = data.map((item: any) => {
        const incart = false;
        return { item, incart };
      });
    });
  }
  }

// addToFavourites(itemData:any){  
//     if(this.login.isLoggedIn){
//       if(itemData.inFav){
//           this.userService.removeFavourite(itemData.item.itemId).subscribe({
//             next:data=>{
//               this.ngOnInit();
//               this._sanckBar.open(`${itemData.item.itemName} is removed from Favourites`, 'success', {
//                 duration: 3000,
//                 panelClass: ['mat-toolbar', 'mat-primary']
//               });
//             },error(err) {
//                   alert("Not removed from favourites!");
//             },
//           })
//       }else{
//           this.userService.addItemToFavourites(itemData.item).subscribe({
//             next:data=>{
//               this.ngOnInit();
//               this._sanckBar.open(`${itemData.item.itemName} is added on your Favourites`, 'success', {
//                 duration: 3000,
//                 panelClass: ['mat-toolbar', 'mat-primary']
//               });
//             },error(err) {
//                   alert("Not added to favourites!");
//             },
//           })}
// }else{
//   this.route.navigateByUrl("/login");
// }
// }
          
addToCart(theItem:any){
  if(this.login.isLoggedIn){
    this.addtocart = new Order();
    this.addtocart.customerId = localStorage.getItem('email') ?? '';
    this.addtocart.billingAddress=localStorage.getItem("address")?? '';
    if (theItem) {
      theItem.status="incart";
      theItem.count=1;
      if (!this.addtocart.items) {
        this.addtocart.items = [];
      }
      this.addtocart.items = this.addtocart.items.concat(theItem);
      
      this.foodie.insertOrder(this.addtocart).subscribe(data=>{
        
        this.ngOnInit();
        this.route.navigateByUrl("/viewItem");
        this._sanckBar.open(`Item Added to Cart`, 'success', {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      });
      }else
  this.route.navigateByUrl("/login");
}  else{this.route.navigateByUrl("/login");}
}


private initializeCartItems():Promise<void>{
  return new Promise((resolve,reject)=>{
    this.foodie.getItems("incart",localStorage.getItem('email')).subscribe(response=>{
      this.cartItems=response; 
      console.log(this.cartItems,"cart");
      resolve();
    },(error)=>{
      this.cartItems=[];
      resolve();
    });
  })  
}
// private initializeFavItems():Promise<void>{
//   return new Promise((resolve,reject)=>{
//     this.userService.getListOfFavourites().subscribe((data:any)=>{
//       this.favItems = data;
//       resolve();
//     },(error)=>{
//       this.favItems=[];
//       resolve();
//     })
//   })
//  }


 remove(i?:Item){
  if(i!=null){
      i.status="incart";
      i.count=1;
    this.foodie.removeItem(localStorage.getItem('email'),i).subscribe(response=>{
      this.ngOnInit();
          });
  }
} 
 
add(i?:Item){
  if(i!=null){
      i.status="incart";
      i.count=1;
    this.foodie.addItem(localStorage.getItem('email'),i).subscribe(responce=>{
      this.ngOnInit();
    })
  }
}

}


