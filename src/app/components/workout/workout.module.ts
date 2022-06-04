import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutComponent } from './workout.component';
import { WorkoutService } from "../../services/workout.service";



@NgModule({
    declarations: [
        WorkoutComponent
    ],
    exports: [
        WorkoutComponent
    ],
    providers: [
      WorkoutService
    ],
    imports: [
        CommonModule
    ]
})
export class WorkoutModule { }
