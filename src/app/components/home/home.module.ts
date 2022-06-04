import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from "../header/header.module";
import { WorkoutModule } from "../workout/workout.module";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    WorkoutModule,
  ]
})
export class HomeModule { }
