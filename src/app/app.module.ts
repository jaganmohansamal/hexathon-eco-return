import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { AboutComponent } from './pages/about/about.component';
import { SupportComponent } from './pages/support/support.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './shared-pages/header/header.component';
import { FooterComponent } from './shared-pages/footer/footer.component';
import { DeviceCentersComponent } from './pages/device-centers/device-centers.component';
import { MachinesComponent } from './pages/device-centers/machines/machines.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaymentComponent,
    AboutComponent,
    SupportComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    DeviceCentersComponent,
    MachinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
