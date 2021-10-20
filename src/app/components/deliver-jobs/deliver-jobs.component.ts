import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Car } from 'src/app/models';
import { CarService } from 'src/app/services';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Component({
  selector: 'app-deliver-jobs',
  templateUrl: './deliver-jobs.component.html',
  styleUrls: ['./deliver-jobs.component.css']
})
export class DeliverJobsComponent implements OnInit {
  public selectedView: string[] = [];
  public cars: Car[] = [];

  // public demo: ObservableArray = new ObservableArray();
  subject = new BehaviorSubject(this.selectedView);
  // subject.subscribe(console.log);



  constructor(private messageService: MessageService, private carService: CarService) { }

  ngOnInit(): void {
    this.messageService.add({ severity: "info", summary: "Info", detail: "DeliverJobs" });
    this.getAllCars();
  }

  getAllCars() {
    this.carService.getCarsSmall()
      .subscribe(cars => {
        this.cars = cars["data"];


      });
  }


  onChange(aPointerEvent: PointerEvent) {
    this.selectedView.forEach(x => {
      console.log(x)
    });
  }

  onClickDeliverSD() {
    console.log("SD");
  }

  onClickDeliverJobs() {
    console.log("JOBS");
  }


}
