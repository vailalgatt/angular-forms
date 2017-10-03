import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; //update to reactive form module
import { CustomerComponent } from './customers/customer.component'; //bring customer component in here
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent // bring customer component in here so that it can bind to the reactive form
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule //update to reactive form module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
