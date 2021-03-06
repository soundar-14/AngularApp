import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoComponent } from './student-info/student-info.component';
import { StudentRoutingModule } from './student-routing.module';



@NgModule({
  declarations: [StudentInfoComponent],
  imports: [
    CommonModule,
    StudentRoutingModule  
  ]
})
export class StudentModule { }
