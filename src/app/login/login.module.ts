import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login.component';
import { DashboardModule } from '../dashboard/dashboard.module';



@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardModule
  ]
})
export class LoginModule { }
