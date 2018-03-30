import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { angularMath } from 'angular-ts-math';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BellsComponent } from './bells/bells.component';


@NgModule({
  declarations: [
    AppComponent,
    BellsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
