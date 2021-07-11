import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/module/auth/login/login.component';
import { RegisterComponent } from './components/module/auth/register/register.component';
import { HeaderComponent } from './components/module/auth/header/header.component';
import { DetailComponent } from './components/module/customer/detail/detail.component';
import { AuthService } from './services/auth.service';
import { CustomerHeaderComponent } from './components/module/customer/header/header.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    DetailComponent,
    CustomerHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    CustomerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
