import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddlibraryComponent } from './addlibrary/addlibrary.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ViewlibraryComponent } from './viewlibrary/viewlibrary.component';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {
    path:"",component:AddlibraryComponent
  },
  {
    path:"view",component:ViewlibraryComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddlibraryComponent,
    ViewlibraryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
