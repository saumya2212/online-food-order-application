import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RegistrationComponent } from './registration/registration.component';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { RestaurantViewComponent } from './restaurant-view/restaurant-view.component';
import {MatCardModule} from '@angular/material/card';
import { ViewItemsComponent } from './view-items/view-items.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { FooterComponent } from './footer/footer.component';
// import { FavouritesComponent } from './favourites/favourites.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AdminFoodItemsViewComponent } from './admin-food-items-view/admin-food-items-view.component';
import { AdminRestaurantViewComponent } from './admin-restaurant-view/admin-restaurant-view.component';
import {MatRippleModule} from '@angular/material/core';
import { FooditemComponent } from './fooditem/fooditem.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AddressDialogComponent } from './address-dialog/address-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';

import { PaymentComponent } from './payment/payment.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    CartComponent,
    PageNotFoundComponent,
    AddRestaurantComponent,
    AddItemsComponent,
    RestaurantViewComponent,
    ViewItemsComponent,
    SearchComponent,
    HomeComponent,
    AdminComponent,
    FooterComponent,
    ProfileComponent,
    DashboardComponent,
    UpdateUserComponent,
    AdminFoodItemsViewComponent,
    AdminRestaurantViewComponent,
    FooditemComponent,
    AddressDialogComponent,
    PaymentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatRippleModule,
    MatTabsModule,
    MatDialogModule,
    MatBadgeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
