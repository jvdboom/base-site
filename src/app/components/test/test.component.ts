import { Component, OnInit, ViewChild } from "@angular/core";
import { LazyLoadEvent, MessageService, SelectItem } from "primeng/api";
import { Car } from "src/app/models";
import { CarService } from "src/app/services";
import * as _ from "lodash";
import { Paginator } from "primeng/paginator";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {

  selectedCities: string[] = [];

  selectedCategories: any[] = ["Technology", "Sports", "Medics", "Countries", ""];

  categories: any[] = [
    { name: "HAccounting01", key: "A" },
    { name: "GMarketing02", key: "M" },
    { name: "FProduction03", key: "P" },
    { name: "EMarketing04", key: "M" },
    { name: "DProduction05", key: "P" },
    { name: "CMarketing06", key: "M" },
    { name: "BProduction07", key: "P" },
    { name: "AResearch08", key: "R" }];

  checked: boolean = false;


  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.selectedCategories = this.categories.slice(1, 3);
    this.messageService.add({ severity: "info", summary: "Info", detail: "Test" });
  }

  handleClick(aMouseEvent: MouseEvent): void {
    // console.log(JSON.stringify(aMouseEvent));

    // this.categories.sort();
    // this.categories.reverse();

    this.categories.sort((a :any, b:any) => {

      var nameA = a.name;
      var nameB = b.name;

      if(nameA < nameB){
        return -1;
      }
      if(nameA > nameB){
        return 1;
      }
      return 0;
    });

    console.log(this.categories);
  }


}
