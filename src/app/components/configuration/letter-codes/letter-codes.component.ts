import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { ILetterCode } from "src/app/models";
import { CosmosRestService } from "src/app/services";

@Component({
  selector: "app-letter-codes",
  templateUrl: "./letter-codes.component.html",
  styleUrls: ["./letter-codes.component.css"]
})
export class LetterCodesComponent implements OnInit {

  public letterCodes: ILetterCode[] = [];

  constructor(private messageService: MessageService, private cosmosRestService: CosmosRestService) { }

  ngOnInit(): void {
    this.messageService.add({ severity: "info", summary: "Info", detail: "LetterCodes" });
    this.getConfiguration();
  }

  getConfiguration(): void {
    this.cosmosRestService.getConfiguration()
      .subscribe(configuration => {
        this.letterCodes = configuration.LetterCodes.sort((a: any, b: any) => {
          var nameA: number = +a.LetterCode;
          var nameB: number = +b.LetterCode;
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


  handleClick(aEvent: any): void {
    this.letterCodes.sort(this.dynamicSort("LetterCode"));
  }

  dynamicSort(aProperty: string) {
    var sortOrder = 1;
    if (aProperty[0] === "-") {
      sortOrder = -1;
      aProperty = aProperty.substr(1);
    }
    return function (a: any, b: any): number {
      var result: number = (a[aProperty] < b[aProperty]) ? -1 : (a[aProperty] > b[aProperty]) ? 1 : 0;
      return result * sortOrder;
    };
  }
}
