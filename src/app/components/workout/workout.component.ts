import { Component, OnInit } from '@angular/core';
import {WorkoutService} from "../../services/workout.service";
import {BehaviorSubject, Observable, of, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  count$ = of(0);
  reps$ = of(0);
  targetValue$ = of(0);

  constructor(private readonly workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.count$ = this.workoutService.getSets();
    this.reps$ = this.workoutService.getReps();
    this.targetValue$ = this.workoutService.getTargetSets();
  }

  changeCount(diff: number) {
    this.workoutService.updateSets(diff).subscribe((newCount: number) => {
      this.count$ = of(newCount);
    });
  }

  resetCount() {
    this.workoutService.resetSets().subscribe((newCount: number) => {
      this.count$ = of(newCount);
    });
  }
}
