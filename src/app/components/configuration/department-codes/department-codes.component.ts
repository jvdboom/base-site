// import { Identifiers } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { IDepartmentCode } from "src/app/models";
import { CosmosRestService } from "src/app/services";

@Component({
  selector: "app-department-codes",
  templateUrl: "./department-codes.component.html",
  styleUrls: ["./department-codes.component.css"]
})
export class DepartmentCodesComponent implements OnInit {

  public departmentCodes: IDepartmentCode[] = [];
  public cols: any[] | undefined;

  constructor(private messageService: MessageService, private cosmosRestService: CosmosRestService) { }

  ngOnInit(): void {
    this.messageService.add({ severity: "info", summary: "Info", detail: "EmailCodes" });
    this.getConfiguration();

    this.cols = [
      { field: "DepartmentCode", header: "DepartmentCode" },
      { field: "CC", header: "CC" },
      { field: "SubjectTP", header: "SubjectTP" },
      { field: "BCC", header: "BCC" },
      { field: "SubjectControl", header: "SubjectControl" },
      { field: "To", header: "To" },
      { field: "From", header: "From" }
    ];
  }

  getConfiguration(): void {
    this.cosmosRestService.getConfiguration()
      .subscribe(configuration => {
        this.departmentCodes = configuration.DepartmentCodes.sort((a: any, b: any) => {
          var nameA: string = a.DepartmentCode;
          var nameB: string = b.DepartmentCode;
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


}
