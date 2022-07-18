import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ClothingStoreAppComponent } from './components/clothing-store-app/clothing-store-app.component';
import { FiltersComponent } from './components/clothing-store-app/filters/filters.component';
import { ProductListComponent } from './components/clothing-store-app/product-list/product-list.component';
import { ProductItemComponent } from './components/clothing-store-app/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ClothesService } from './components/clothing-store-app/product-list/product-list.component.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ClothingStoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ClothesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
