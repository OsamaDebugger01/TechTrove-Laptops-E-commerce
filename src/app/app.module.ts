import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { FilterComponent } from './Components/Shared/filter/filter.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { ProductsComponent } from './Components/Pages/products/products.component';
import { ProductDetailsComponent } from './Components/Pages/product-details/product-details.component';
import { CartComponent } from './Components/Pages/cart/cart.component';
import { OrdersComponent } from './Components/Pages/orders/orders.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { SliderComponent } from './Components/Pages/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './Components/Pages/categories/categories.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminDashBoardComponent } from './Components/Pages/admin-dash-board/admin-dash-board.component';
<<<<<<< HEAD
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { AddProductComponent } from './Components/Pages/add-product/add-product.component';

import {MatButtonModule} from '@angular/material/button';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomersComponent } from './Components/Pages/customers/customers.component';
import { EditUserComponent } from './Components/Shared/edit-user/edit-user.component';



import { ShippingComponent } from './Components/Pages/shipping/shipping.component';
import { CheckoutComponent } from './Components/Pages/checkout/checkout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { TransactionsComponent } from './Components/Pages/transactions/transactions.component';

=======
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { AddProductComponent } from './Components/Pages/add-product/add-product.component';
import { MatButtonModule } from '@angular/material/button';
import { CustomersComponent } from './Components/Pages/customers/customers.component';
import { EditUserComponent } from './Components/Shared/edit-user/edit-user.component';

import { ShippingComponent } from './Components/Pages/shipping/shipping.component';
import { CheckoutComponent } from './Components/Pages/checkout/checkout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbAccordionModule,
  NgbDatepickerModule,
  NgbModal,
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import { TransactionsComponent } from './Components/Pages/transactions/transactions.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
>>>>>>> 2a46bda877372e41a89cccb2211ff7b7d0e7de34
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductCardComponent } from './Components/Shared/product-card/product-card.component';
import { ProductReviewsComponent } from './Components/Shared/product-reviews/product-reviews.component';
import { ProductDetailsCardComponent } from './Components/Shared/product-details-card/product-details-card.component';

import { ReviewsComponent } from './Components/Pages/reviews/reviews.component';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';

import { MatDialogModule } from '@angular/material/dialog';
import { ManageCategoriesComponent } from './Components/Pages/manage-categories/manage-categories.component';
import { CatdialogComponent } from './Components/dialogs/catdialog/catdialog.component';
<<<<<<< HEAD
import { EditProductComponent } from './Components/Pages/edit-product/edit-product.component';
import { ProductListComponent } from './Components/Pages/product-list/product-list.component';
=======

>>>>>>> 2a46bda877372e41a89cccb2211ff7b7d0e7de34

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductDetailsCardComponent,
    ProductReviewsComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    OrdersComponent,
    LoginComponent,
    RegisterComponent,
    SliderComponent,
    CategoriesComponent,
    AdminDashBoardComponent,
    AddProductComponent,
    CustomersComponent,
    EditUserComponent,
    ShippingComponent,
    CheckoutComponent,
    ReviewsComponent,
    CatdialogComponent,
    TransactionsComponent,
<<<<<<< HEAD
          ManageCategoriesComponent,
          EditProductComponent,
          ProductListComponent,




=======
    ManageCategoriesComponent,
>>>>>>> 2a46bda877372e41a89cccb2211ff7b7d0e7de34
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTreeModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    NgbModule,
    NgbCarouselModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,

    NgbAccordionModule,
    HttpClientModule,
    NgbDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
<<<<<<< HEAD
    MatDialogModule



=======
    ToastrModule,
    NgxSpinnerModule,
    MatDialogModule,
>>>>>>> 2a46bda877372e41a89cccb2211ff7b7d0e7de34
  ],
  providers: [
    NgbModal,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS,
      multi: true,
    },
    JwtHelperService,
    MatDialogModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
<<<<<<< HEAD
export class AppModule { }
=======
export class AppModule {}
>>>>>>> 2a46bda877372e41a89cccb2211ff7b7d0e7de34
