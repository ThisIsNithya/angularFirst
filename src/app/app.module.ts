import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/project-component/header/header.component';
import { SidebarComponent } from 'src/project-component/sidebar/sidebar.component';
import { MainComponent } from 'src/project-component/main/main.component';
import { Homework1Component } from 'src/project-component/homework1/homework1.component';
import { FooterComponent } from 'src/project-component/footer/footer.component';
import { CommonModule } from '@angular/common';
import { CurrencyexhangePipe } from 'src/pipes/currencyexhange.pipe';
import { AppRoutingModule } from './app-routing.module';  
import { FormsModule } from '@angular/forms'; 
import { Homework2Component } from 'src/project-component/homework2/homework2.component';
import { Homework2child1Component } from 'src/project-component/homework2child1/homework2child1.component';
import { WelcomeComponent } from 'src/project-component/welcome/welcome.component';
import { Homework3Component } from 'src/project-component/homework3/homework3.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    Homework1Component,
    Homework2Component,
    Homework2child1Component,
    CurrencyexhangePipe,
    WelcomeComponent,
    Homework3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
