import { Component, OnInit, ViewChild } from "@angular/core";
import { LazyLoadEvent, MessageService, SelectItem } from "primeng/api";
import { Car } from "src/app/models";
import { CarService } from "src/app/services";
import * as _ from "lodash";
import { Paginator } from "primeng/paginator";

@Component({
  selector: "app-daily",
  templateUrl: "./daily.component.html",
  styleUrls: ["./daily.component.css"]
})
export class DailyComponent implements OnInit {
  @ViewChild("pp", { static: false }) paginator: Paginator | undefined;

  public cars: Car[] = [];
  private allCars: Car[] = [];
  public allYears: SelectItem[] = [];
  public allBrands: SelectItem[] = [];
  public selectedBrand: SelectItem | undefined;
  public totalRecords = 0;
  public rows = 10;
  private lastLazyLoadEvent: LazyLoadEvent | undefined;
  private page: any;

  constructor(private messageService: MessageService, private carService: CarService) { }

  ngOnInit(): void {
    this.messageService.add({severity:"info", summary: "Info", detail: "Daily Reports"});
    this.getAllCars();
    this.selectedBrand = { label: "Brand...", value: undefined };
    this.lastLazyLoadEvent = { first: 0, rows: this.rows, sortField: "Brand", sortOrder: -1 };
    this.page = { first: 0, rows: this.rows, page: 0, pageCount: this.totalRecords };
  }

  getAllCars() {
    this.carService.getCarsMedium()
      .subscribe(cars => {
        this.allCars = cars["data"];
        this.totalRecords = this.allCars.length;
        this.onPageChange({ "page": 0, "first": 0, "rows": this.rows, "pageCount": 10 });
        this.fillYears(this.allCars);
        this.fillBrands(this.allCars);
      });
  }


  onPageChange(aPage: any) {
    this.page = aPage;
    this.onLazyLoad(this.lastLazyLoadEvent);
  }


  onLazyLoad(aLazyLoadEvent?: LazyLoadEvent) {
    if (aLazyLoadEvent) {
      const params: any = {
        first: this.page.first ? this.page.first.toString() : "0",
        rows: this.page.rows ? this.page.rows.toString() : this.rows.toString(),
        sortField: aLazyLoadEvent.sortField ? aLazyLoadEvent.sortField : "Brand",
        sortOrder: aLazyLoadEvent.sortOrder?.toString(),
      };

      this.lastLazyLoadEvent = aLazyLoadEvent;

      this.cars = this.allCars.slice(this.page.first, this.page.first + this.page.rows);

      // this.scalerRestService.getJobTickets<ScalerObject>(params)
      //   .subscribe(scalerObject => {
      //     this.jobTickets = scalerObject.objects;
      //     this.total = this.jobTickets.length < 1 ? 0 : +this.jobTickets[0].Total;
      //   },
      //     error => {
      //       this.messageService.add({ severity: "error", summary: "Get JobTickets", detail: JSON.stringify(error) });
      //     });
    }
  }


  fillYears(aAllCars: Car[]): void {
    let allYears: SelectItem[] = [];
    aAllCars.forEach(x => {
      allYears = [...allYears, { label: x.year, value: x.year }];
    });
    allYears = _.unionWith(allYears, _.isEqual);

    this.allYears = allYears.sort((a, b) => a.value > b.value ? 1 : -1);
  }


  fillBrands(aAllCars: Car[]): void {
    let allBrands: SelectItem[] = [];
    aAllCars.forEach(x => {
      allBrands = [...allBrands, { label: x.brand, value: x.brand }];
    });
    allBrands = _.unionWith(allBrands, _.isEqual);

    this.allBrands = allBrands.sort((a, b) => a.value > b.value ? 1 : -1);
    this.allBrands = [{ label: "Brand...", value: undefined }, ...this.allBrands];
  }


  onChangeBrand(): void {
    if (this.selectedBrand?.value) {
      this.cars = this.allCars.filter(a => a.brand == this.selectedBrand?.value);
      this.totalRecords = this.cars.length;
    } else {
      this.cars = this.allCars;
      this.totalRecords = this.cars.length;
      this.onLazyLoad({ first: 0, rows: this.rows, sortField: "Brand", sortOrder: -1 });
    }

  }


}