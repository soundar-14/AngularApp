import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementInfoComponent } from './management-info/management-info.component';
import { ManagmentRoutingModule } from './management-routing.module';



@NgModule({
  declarations: [ManagementInfoComponent],
  imports: [
    CommonModule,
    ManagmentRoutingModule
  ]
})
export class ManagementModule { }
