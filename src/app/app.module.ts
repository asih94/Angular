import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TeachersInfoModule } from './teachers/teachers.module';
import { PupilsInfoModule } from './pupils/pupils.module';
import { EmployeesInfoModule } from './employees/employees.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule, AppRoutingModule, TeachersInfoModule, PupilsInfoModule, EmployeesInfoModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
