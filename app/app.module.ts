import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent }  from './app.component';
import { AboutComponent } from './app.about';
import { MyHomeComponent } from './app.home';

@NgModule({
  imports: [ 
   BrowserModule,
   FormsModule,
   routing
   ],
  declarations: [ AppComponent, AboutComponent, MyHomeComponent ],
  providers: [
  	appRoutingProviders,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
