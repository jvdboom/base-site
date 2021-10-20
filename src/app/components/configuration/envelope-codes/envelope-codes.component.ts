import { Component, OnInit } from "@angular/core";
import { MessageService, SortEvent } from "primeng/api";
import { IEnvelopCode } from "src/app/models";
import { CosmosRestService } from "src/app/services";

@Component({
  selector: "app-envelope-codes",
  templateUrl: "./envelope-codes.component.html",
  styleUrls: ["./envelope-codes.component.css"]
})
export class EnvelopeCodesComponent implements OnInit {

  public envelopCodes: IEnvelopCode[] = [];

  constructor(private messageService: MessageService, private cosmosRestService: CosmosRestService) { }

  ngOnInit(): void {
    this.messageService.add({ severity: "info", summary: "Info", detail: "EnvelopCodes" });
    this.getConfiguration();
  }

  getConfiguration() {
    this.cosmosRestService.getConfiguration()
      .subscribe(configuration => {
        this.envelopCodes = configuration.EnvelopCodes.sort((a: any, b: any) => {
          var nameA: number = +a.EnvelopCode;
          var nameB: number = +b.EnvelopCode;
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      });
  }

  handleClick(aEvent: any): void { }


  customSort(event: SortEvent): void {
    event.data!.sort((data1, data2) => {
      let value1: any = data1[event.field ? event.field : ""];
      let value2: any = data2[event.field ? event.field : ""];
      let result: any = undefined;

      if (value1 === undefined && value2 !== undefined) {
        result = -1;
      } else if (value1 !== undefined && value2 === undefined) {
        result = 1;
      } else if (value1 === undefined && value2 === undefined) {
        result = 0;
      } else if (typeof value1 === "string" && typeof value2 === "string") {
        let a: string = value1.toLowerCase();
        let b: string = value2.toLowerCase();
        result = a.localeCompare(b);
      } else {
        if (value1 < value2) {
          return -1;
        }
        if (value1 > value2) {
          return 1;
        }
        return 0;
      }

      let order: number = event.order ? event.order : -1;
      return (order * result);
    });
  }

}
