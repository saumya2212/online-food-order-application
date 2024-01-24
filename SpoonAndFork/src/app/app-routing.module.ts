import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { RestaurantViewComponent } from './restaurant-view/restaurant-view.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { HomeComponent } from './home/home.component';

import { ViewItemsComponent } from './view-items/view-items.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CartComponent } from './cart/cart.component';
import { AdminFoodItemsViewComponent } from './admin-food-items-view/admin-food-items-view.component';
import { AdminRestaurantViewComponent } from './admin-restaurant-view/admin-restaurant-view.component';
import { AdminComponent } from './admin/admin.component';
import { FooditemComponent } from './fooditem/fooditem.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PaymentComponent } from './payment/payment.component';
import { CanDeactivateGuard } from './service/can-deactivate.guard';

const routes: Routes = [
  // {path:"header",component:HeaderComponent},
  {path:"registration",component:RegistrationComponent,canDeactivate:[CanDeactivateGuard]},
  {path:"login",component:LoginComponent},
  {path:"header",component:HeaderComponent},
  {path:"cart",component:CartComponent,canActivate:[AuthGuardGuard]},
  {path:"profile",component:ProfileComponent, canActivate:[AuthGuardGuard]},
  {path:"update",component:UpdateUserComponent},
  {path:"",component:DashboardComponent},
  {path:"viewItem",component:ViewItemsComponent,canActivate:[AuthGuardGuard]},
  {path:"restaurantView",component:RestaurantViewComponent},
  {path:"admin",component:AdminComponent,canActivate:[AuthGuardGuard]},
  {path:"adminFoodItemView",component:AdminFoodItemsViewComponent,canActivate:[AuthGuardGuard]},
  {path:"adminRestaurantView",component:AdminRestaurantViewComponent,canActivate:[AuthGuardGuard]},
  {path:"adminAddItem",component:AddItemsComponent},
  {path:"adminAddRestaurant",component:AddRestaurantComponent},
  {path:"adminFoodItem",component:FooditemComponent},
  {path:"payment", component:PaymentComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
