import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffInfoComponent } from './staff-info/staff-info.component';
import { StaffRoutingModule } from './staff-routing.module';



@NgModule({
  declarations: [StaffInfoComponent],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
